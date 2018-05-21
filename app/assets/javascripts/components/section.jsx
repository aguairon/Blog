class Section extends React.Component{
  render() {
    const section = {...this.props.section};
    const admin = {...this.props.admin};
    return(
      <div className='section' id={section.class_name}>
        <h2>{section.title}</h2>  
        {section.items.length > 0 ? (
          <SectionHasItems {...section} />
        ) : (
          <SectionIsEmpty {...admin} />
        )}
      </div>
    )
  }
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired
// };