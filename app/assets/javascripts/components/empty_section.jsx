class SectionIsEmpty extends React.Component{
  render() {
    const newProps = {...this.props}
    return (
      <div>
        <p className='empty'>Viene pronto</p>
        <AdminLink {...newProps}/>
      </div>
    )
  }
}