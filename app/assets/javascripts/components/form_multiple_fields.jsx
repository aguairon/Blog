class FormMultipleFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
      period_id: props.period_id,
      valid_name: true,
      valid_body: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, ["valid_" + event.target.name]: true })
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.name.length < 5 || this.state.body.length < 10) {
      if (this.state.name.length < 5) {
        this.setState({valid_name: false});
      } else {
      this.setState({ valid_body: false });
      }
    } else {
      const period_id = this.state.period_id;
      const name = this.state.name;
      const body = this.state.body 
      $.ajax({
        url: "/characters",
        dataType: 'json',
        type: "POST",
        data:  {character: {period_id, name, body}},
        success:
          window.location.href= "/characters?period_id=" + this.state.period_id
      })
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Nombre</label>
        <input type='text' name='name' autoFocus value={this.state.name} onChange={this.handleChange} />
        {!this.state.valid_name && <div style={{color:"red"}}>Este nombre no es válido</div>}
        <label>Vida</label>
        <textarea name='body' value={this.state.body} onChange={this.handleChange} />
        {!this.state.valid_body && <div style={{color:'red'}}>Este texto no es válido</div>}
        <input type='submit' value='Crear personaje'/>
      </form>
    )
  }
}