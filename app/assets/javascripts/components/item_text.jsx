class ItemText extends React.Component{
  render() {
    const text = this.props.text || this.props.body;
    return (
      <div className='text'>
        <p>{text}</p>
      </div>
    )
  }
}

ItemText.propTypes = {
  text: PropTypes.string,
  body: PropTypes.string
}