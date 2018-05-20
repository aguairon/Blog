class TitleWithLink extends React.Component {
  render(){
    return(
      <header className="header">
        <h1 className='main'>{this.props.text} 
        { this.props.admin_signed_in && <a href={this.props.path} className="text-muted">{this.props.path_title}</a> }
        </h1>
      </header>
    )
  }
}

TitleWithLink.propTypes = {
	text: PropTypes.string.isRequired,
	admin_signed_in: PropTypes.bool,
	path_title: PropTypes.string,
	path: PropTypes.string
};