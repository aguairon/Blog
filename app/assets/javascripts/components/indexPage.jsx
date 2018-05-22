class IndexPage extends React.Component{
  render() {
    const title = {...this.props.title};
    const list = {...this.props.list};
    return(
      <div>
        <PageTitle {...title} admin/>
        <List {...list}/>
      </div>
    )
  }
}