class ArticleText extends React.Component{
  render() {
    return (
      <div className='article'>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

ArticleText.propTypes = {
  text: PropTypes.string.isRequired
}