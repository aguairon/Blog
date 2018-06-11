class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitm= this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ title: event.target.value })

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Título
          <input type='text' name='title-field' value={this.state.title} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Crear período" />
      </form>
    )
  }
}



// handleSubmit: function(e) {
//     e.preventDefault();
//     var name = this.state.name.trim();
//     var age = this.state.age.trim();
//     var country = this.state.country.trim();
//     if (!name || !age || !country) {
//       return;
//     }
//     this.setState({ name: '', age: '', country: '' });

//     var user = {user: this.state.user}
//     this.setState({data: user});
//     $.ajax({
//       url: '/users/new',
//       dataType: 'json',
//       type: 'POST',
//       data: {user: user},
//       success: function(data) {
//         this.setState({data: user});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         this.setState({data: user});
//        console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },