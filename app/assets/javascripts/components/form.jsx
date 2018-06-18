class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.period.title,
      valid: true,
      id: props.period.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ title: event.target.value });
    this.setState({valid: true});
  }

  handleSubmit(event, props) {
    event.preventDefault();
    if (this.state.title === undefined || this.state.title.length < 5) {
      this.setState({ valid: false }); 
 
    } else {
      this.setState({ valid: true });
      const title = this.state.title;
      let url;
      if (this.state.id !==  undefined) {
        url = "/periods/" + this.state.id;
      } else {
        url = "/periods"
      }

      $.ajax({
        url: url,
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