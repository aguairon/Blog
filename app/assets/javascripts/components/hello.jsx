class Title extends React.Component {
  render(){
   
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
};

