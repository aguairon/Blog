class Form extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.onSubmit}>
        <label>Título</label>
        <input type='text' name='title' autoFocus  value={this.props.value} onChange={this.props.onChange} />
        {!this.props.valid && <div style={{color:"red"}}>Este título no es válido</div>}
        <input type="submit" value="Crear período" />
      </form>
    )
  }
}