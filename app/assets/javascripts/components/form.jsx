class Form extends React.Component {
  constructor(props) {
    super(props);
    let title;
    let id;
    if (props.period) {
      title = props.period.title;
      id = props.period.id;
    } else {
      title = "";
    }

    this.state = {
      title: title,
      valid: true,
      id: id
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
    if (this.state.title.length < 5) {
      this.setState({ valid: false }); 
 
    } else {
      this.setState({ valid: true });
      const title = this.state.title;
      let url;
      let method;
      if (this.state.id !==  undefined) {
        url = "/periods/" + this.state.id;
        method = "PATCH";
      } else {
        url = "/periods"
        method = 'POST'
      }

      $.ajax({
        url: url,
        dataType: 'json',
        type: method,
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