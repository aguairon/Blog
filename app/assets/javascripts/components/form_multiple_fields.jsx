class FormMultipleFields extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.onSubmit}>
        <label>{this.props.field_label}</label>
        <input type='text' name={this.props.field_name} autoFocus value={this.props.field_text} onChange={this.props.onChange} />
        {!this.props.valid_field && <div style={{color:"red"}}>Este {this.props.field_label.toString().toLowerCase()} no es válido</div>}
        <label>{this.props.textarea_label}</label>
        <textarea name={this.props.textarea_name} value={this.props.textarea_text} onChange={this.props.onChange} />
        {!this.props.valid_textarea && <div style={{color:'red'}}>Este texto no es válido</div>}
        <input type='submit' value='Crear personaje'/>
      </form>
    )
  }
}