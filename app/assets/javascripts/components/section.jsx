class Section extends React.Component{
  section(section, admin) {
    if (section.items.length > 0) {
      return (
        <SectionHasItems {...section} />
      );
    }

    return (
      <SectionIsEmpty {...admin} />
    );
  }

  render() {
    const section = {...this.props.section};
    const admin = {...this.props.admin};
    return(
      <div className='section' id={section.class_name}>
        <h2>{section.title}</h2>  
        {this.section(section, admin)}
      </div>
    )
  }
}
