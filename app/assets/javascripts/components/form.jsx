class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:'',
      valid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ title: event.target.value });
    this.setState({valid: true});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title.length < 5) {
      this.setState({ valid: false }); 
 
    } else {
      this.setState({ valid: true });
      const title = this.state.title;
      $.ajax({
        url: "/periods",
        dataType: 'json',
        type: 'POST',
        data:  {period: {title}},
        success:
          window.location.href= "/"
      })
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Título
          <input type='text' name='title-field' autoFocus  value={this.state.title} onChange={this.handleChange} />
          {!this.state.valid && <div style={{color:"red"}}>Este título no es válido</div>}
        </label>
        <input type="submit" value="Crear período" />
      </form>
    )
  }
}