
class Title extends React.Component {
	render() {
		return (
      <header>
			 <h1>{this.props.title}</h1>
      </header>
		)
	}
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

