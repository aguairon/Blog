class List extends React.Component {
  render() {
    const items = this.props.items;
    const item = items.map(item => {
      if (item.title) {
        return (
          <li key={`${item.id}`}><a href= {this.props.path + item.id}>{item.title}</a></li>
        )
      } else {
        return (
          <li key={`${item.id}`}><a href= {this.props.path + item.id}>{item.name}</a></li>
        )
      }
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
