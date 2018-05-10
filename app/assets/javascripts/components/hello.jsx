class Title extends React.Component {
  render(){
   
    if (this.props.admin_signed_in) {
    	p = <a href={this.props.path} className="text-muted">{this.props.path_title}</a>;
    } else {
    	p = null;
    }

    return(
      <div>
        <h1 className='main'>{this.props.title} {p}</h1>
      </div>
    )
  }
};

// kjlkj
// class List extends React.Component {
// 	render() {
// 		return(
// 			<div className='list periods_list'>
// 				<Link to={period_path(period)}>too</Link>
// 			</div>
// 		)
// 	}
// }
// // <Link to={`/users/${user.id}`} activeClassName="active">{user.name}</Link>

// // <div class="list periods_list">
// //   <% @periods.each do |period| %>
// //     <div><%= link_to period.title, period_path(period) %></div>
// //   <% end %>
// // </div>
