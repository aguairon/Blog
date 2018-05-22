
class Title extends React.Component {
	render() {
		return (
			<h1>{this.props.title}</h1>
		)
	}
}

Title.PropTypes = {
  title: PropTypes.string.isRequired
}

