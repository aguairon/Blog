class PageTitle extends React.Component {
  admin(props) {
    if (props.admin_signed_in) {
      return (
        <AdminLink {...props}/>
      );
    }
  }

  render(){
    const newProps = {...this.props};

    return(
      <header className="header">
        <h1 className='main'>{newProps.text} 
        {this.admin(newProps)}
        </h1>
      </header>
    )
  }
}

PageTitle.defaultProps = {
  admin_signed_in: false
};

PageTitle.propTypes = {
	text: PropTypes.string.isRequired,
	admin_signed_in: PropTypes.bool.isRequired
};