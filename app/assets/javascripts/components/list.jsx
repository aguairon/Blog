class List extends React.Component {
  render() {
    const items = this.props.items;
    const item = items.map(item => {
      const text = item.title || item.name
      return (
        <li key={`${item.id}`}><a href= {this.props.path + item.id}>{text}</a></li>
      )
    });

    return (
      <ul className="list">{item}</ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired
};
