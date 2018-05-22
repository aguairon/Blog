class SectionIsEmpty extends React.Component{
  render() {
    const newProps = {...this.props}
    return (
      <div>
        <p className='empty'>Viene pronto</p>
        <div className='more'>
          <AdminLink {...newProps}/>
        </div>
      </div>
    )
  }
}