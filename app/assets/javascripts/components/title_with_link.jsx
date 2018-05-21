class TitleWithLink extends React.Component {
  render(){
    return(
      <header className="header">
        <h1 className='main'>{this.props.text} 
        { this.props.admin_signed_in && <AdminLink path ={this.props.path} path_title= {this.props.path_title}/> }
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