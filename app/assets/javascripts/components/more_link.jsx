
class MoreLink extends React.Component{
  render() {
    return (
      <div className='more'><a href={this.props.linked_items_path}>{this.props.linked_items_title}</a></div>
    )
  }
}

MoreLink.propTypes = {
  linked_items_path: PropTypes.string.isRequired,
  linked_items_title: PropTypes.string.isRequired
}