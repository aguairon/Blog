class IndexPage extends React.Component{
  render() {
    const title = {...this.props.title};
    const list = {...this.props.list};
    return(
      <div>
        <PageTitle {...title} link/>
        <List {...list}/>
      </div>
    )
  }
}