class ItemText extends React.Component{
  render() {
    return (
      <div className='text'>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

ItemText.propTypes = {
  text: PropTypes.string.isRequired
}