class FormMultipleFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      life: "",
      valid_name: true,
      valid_life: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, ["valid_" + event.target.name]: true })
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.name.length < 5 || this.state.life.length < 10) {
      if (this.state.name.length < 5) {
        this.setState({valid_name: false});
      } else {
      this.setState({ valid_life: false });
      }
    } else {
      ///ajax call
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Nombre</label>
        <input type='text' name='name' autoFocus value={this.state.name} onChange={this.handleChange} />
        {!this.state.valid_name && <div style={{color:"red"}}>Este nombre no es válido</div>}
        <label>Vida</label>
        <textarea name='life' value={this.state.life} onChange={this.handleChange} />
        {!this.state.valid_life && <div style={{color:'red'}}>Este texto no es válido</div>}
        <input type='submit' value='Crear personaje'/>
      </form>
    )
  }
}