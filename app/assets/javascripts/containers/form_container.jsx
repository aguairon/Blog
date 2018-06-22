class FormContainer extends React.Component {
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
    this.setState({ [event.target.name]: event.target.value, valid: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title.length < 5) {
      this.setState({ valid: false }); 
 
    } else {
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
      <Form 
        onSubmit={this.handleSubmit}
        value={this.state.title}
        onChange={this.handleChange}
        valid={this.state.valid} />
    )
  }
}