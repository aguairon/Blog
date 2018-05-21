class SectionHasItems extends React.Component {
  render() {
    const newProps = {...this.props};
    return( 
      <div>
        <List {...newProps} />
        <MoreLink {...newProps} />
      </div>
    )
  }
}