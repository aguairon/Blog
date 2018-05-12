
class Title extends React.Component {
  render(){
  	let p;
    if (this.props.admin_signed_in) {
    	p = <a href={this.props.path} className="text-muted">{this.props.path_title}</a>;
    } else {
    	p = null;
    }

    return(
      <div>
        <h1 className='main'>{this.props.title} {p}</h1>
      </div>
    )
  }
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
	admin_signed_in: PropTypes.bool,
	path_title: PropTypes.string,
	path: PropTypes.string
};