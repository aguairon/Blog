class TitleWithLink extends React.Component {
  render(){
    return(
      <h1 className='main'>{this.props.title} { this.props.admin_signed_in && <a href={this.props.path} className="text-muted">{this.props.path_title}</a> }</h1>
    )
  }
}

TitleWithLink.propTypes = {
	title: PropTypes.string.isRequired,
	admin_signed_in: PropTypes.bool,
	path_title: PropTypes.string,
	path: PropTypes.string
};