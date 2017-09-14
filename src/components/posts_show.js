import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchaPost} from '../actions';
import {deleteaPost} from '../actions';
import {Link} from 'react-router-dom';

class Postshow extends Component{

	componentDidMount(){

	const {id} = this.props.match.params;
	this.props.fetchaPost(id);

}

	onDeleteClick(){

		const {id} = this.props.match.params;
		this.props.deleteaPost(id,() => {

			this.props.history.push('/');

		});
	}


	render(){

		const {post} = this.props;
		
		if(!post){

			return <div>Loading...</div>;
		}
			
		return(
			<div> 
			<Link to = "/" className = "btn btn-primary pull-xs-right">Home </Link>
			<button className ="btn btn-danger pull-xs-right"
			onClick = {this.onDeleteClick.bind(this)}
			>Delete Post</button>
			<h3>{post.title}</h3>
			<h6> {post.categories}</h6>
			<p>{post.content}</p>
			</div>
		);
	}
}


function mapStateToProps({posts},ownProps){

	return {post:posts[ownProps.match.params.id]}; // to fetch just that id
}


export default connect(mapStateToProps,{fetchaPost,deleteaPost})(Postshow);