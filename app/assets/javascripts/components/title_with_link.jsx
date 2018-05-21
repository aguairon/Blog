class TitleWithLink extends React.Component {
  render(){
    const newProps = {...this.props}
    return(
      <header className="header">
        <h1 className='main'>{newProps.text} 
        { this.props.admin_signed_in && <AdminLink {...newProps}/> }
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