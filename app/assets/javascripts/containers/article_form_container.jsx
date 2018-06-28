class ArticleFormContainer extends React.Component {
  constructor(props) {
    super(props);

    let title;
    let text;
    if (props.data.title || props.data.text) {
      title = props.data.title;
      text = props.data.text;

    } else {
      title = "";
      text = "";
    }

    this.state = {
      title: title,
      text: text,
      period_id: props.data.period_id,
      valid_title: true,
      valid_text: true,
      article_id: props.data.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, ["valid_" + event.target.name]: true })
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title.length < 5 || this.state.text.length < 10) {
      if (this.state.title.length < 5) {
        this.setState({valid_title: false});
      } else {
      this.setState({ valid_text: false });
      }
    } else {
      const period_id = this.state.period_id;
      const title = this.state.title;
      const text = this.state.text;
      const article_id = this.state.article_id;
      let url;
      let method;
      if (this.state.article_id) {
        url = "/articles/" + this.state.article_id;
        method = "PATCH";
      } else {
        url = "/articles";
        method = "POST";
      }

      $.ajax({
        url: url,
        dataType: 'json',
        type: method,
        data:  {article: {period_id, title, text}},
        success:
          window.location.href= "/articles?period_id=" + this.state.period_id
      })
    }
  }

  render(){
    return(
      <FormMultipleFields 
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        field_text={this.state.title} 
        field_name='title'
        field_label='Título'
        valid_field = {this.state.valid_title}
        textarea_text={this.state.text} 
        textarea_name='text'
        textarea_label='Cuerpo del artículo'
        valid_textarea = {this.state.valid_text}
      />
    )
  }
}