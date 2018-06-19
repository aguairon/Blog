class Form extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.onSubmit}>
        <label>
        Título
          <input type='text' name='title-field' autoFocus  value={this.props.value} onChange={this.props.onChange} />
          {!this.props.valid && <div style={{color:"red"}}>Este título no es válido</div>}
        </label>
        <input type="submit" value="Crear período" />
      </form>
    )
  }
}