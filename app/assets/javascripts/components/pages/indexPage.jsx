class IndexPage extends React.Component{
  render() {
    return(
      <div>
        <PageTitle {...this.props.title} />
        <List {...this.props.list}/>
      </div>
    )
  }
}