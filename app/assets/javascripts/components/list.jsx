class List extends React.Component {
  render() {
    const periods = this.props.periods;
    const periodTitles = periods.map(period => {
      return (
        <li key={`${period.id}`}><a href= {'/periods/' + period.id}>{period.title}</a></li>
      )
    });

    return (
      <ul className="list periods_list">{periodTitles}</ul>
    );
  }
}

List.propTypes = {
  periods: PropTypes.array.isRequired,
};