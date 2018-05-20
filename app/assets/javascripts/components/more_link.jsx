
class MoreLink extends React.Component{
  render() {
    return (
      <div className='more'><a href={this.props.linked_items_path}>{this.props.linked_items_title}</a></div>
    )
  }
}