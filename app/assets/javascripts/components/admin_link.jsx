class AdminLink extends React.Component{
  render() {
    return(
      <div>
      { this.props.admin_signed_in && <a href={this.props.path} className="text-muted">{this.props.path_title}</a> }
      </div>
    )
  }
}