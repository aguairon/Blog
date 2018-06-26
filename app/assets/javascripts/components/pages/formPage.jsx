class FormPage extends React.Component{
  render(){
    return(
      <div>
        <PageTitle {...this.props.title} />
        <FormContainer {...this.props.period} />
      </div>
    )
  }
}