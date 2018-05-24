class IndexPage extends React.Component{
  render() {
    return(
      <div>
        <PageTitle {...this.props.title} link/>
        <List {...this.props.list}/>
      </div>
    )
  }
}