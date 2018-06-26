class Sections extends React.Component{
  render() {
    const sections = this.props.sections;
    const section = sections.map((section, index) =>{
      return (
        <Section key={index} {...section} {...this.props}/>
      )
    });

    return( 
      <div className="sections">
      {section}
      </div>
    )
  }
}

