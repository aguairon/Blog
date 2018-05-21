class AdminLink extends React.Component{
  render() {
    return(
      <a href={this.props.path} className="text-muted">{this.props.path_title}</a> 
    )
  }
}