class CharacterFormContainer extends React.Component {
  constructor(props) {
    super(props);

    let name = props.data.name || "";
    let body = props.data.body || "";

    this.state = {
      name: name,
      body: body,
      period_id: props.data.period_id,
      valid_name: true,
      valid_body: true,
      character_id: props.data.id
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
      const body = this.state.body;
      const character_id = this.state[kind_id];
      let url;
      let method;
      if (this.state.character_id) {
        url = "/characters/" + this.state.character_id;
        method = "PATCH";
      } else {
        url = "/characters";
        method = "POST";
      }

      $.ajax({
        url: url,
        dataType: 'json',
        type: method,
        data:  {character: {period_id, name, body}},
        success:
          window.location.href= "/characters?period_id=" + this.state.period_id
      })
    }
  }

  render(){
    return(
      <FormMultipleFields 
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        field_text={this.state.name} 
        field_name='name'
        field_label='Nombre'
        valid_field = {this.state.valid_name}
        textarea_text={this.state.body} 
        textarea_name='body'
        textarea_label='Vida'
        valid_textarea = {this.state.valid_body}
      />
    )
  }
}