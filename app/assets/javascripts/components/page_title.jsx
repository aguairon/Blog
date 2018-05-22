class PageTitle extends React.Component {
  admin(props) {
    if (props.admin_signed_in && props.admin) {
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

PageTitle.propTypes = {
	text: PropTypes.string.isRequired,
	admin_signed_in: PropTypes.bool.isRequired
};