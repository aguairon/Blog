class FormMultipleFields extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.onSubmit}>
        <label>Nombre</label>
        <input type='text' name='name' autoFocus value={this.props.name} onChange={this.props.onChange} />
        {!this.props.valid_name && <div style={{color:"red"}}>Este nombre no es válido</div>}
        <label>Vida</label>
        <textarea name='body' value={this.props.body} onChange={this.props.onChange} />
        {!this.props.valid_body && <div style={{color:'red'}}>Este texto no es válido</div>}
        <input type='submit' value='Crear personaje'/>
      </form>
    )
  }
}