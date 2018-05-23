class ShowItemPage extends React.Component {
  render() {
    const title = {...this.props.title};
    const text = {...this.props.text};
    return(
      <div>
        <PageTitle {...title}/>
        <ItemText {...text} />
      </div>
    )
  }
}