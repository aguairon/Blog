class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title:'' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
  
    $.ajax({
      url: "/periods",
      dataType: 'json',
      type: 'POST',
      data:  {period: this.state},
      success:
        window.location.href= "/"
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Título
          <input type='text' name='title-field' autoFocus required pattern=".{6,}" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Crear período" />
      </form>
    )
  }
}