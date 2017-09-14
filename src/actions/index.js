import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POST  = 'fetch_post';
export const DELETE_POST = 'delete_post';
const root_url = 'http://reduxblog.herokuapp.com/api';
const api_key = '?key=staples1234';

export function fetchPosts(){

const request = axios.get(`${root_url}/posts${api_key}`);

return {

	type: FETCH_POSTS,
	payload : request
};

}


export function createPosts(values,callback){

const request = axios.post(`${root_url}/posts${api_key}`,values).then(()=> callback());

return {

	type: CREATE_POSTS,
	payload : request
};


}


export function fetchaPost(id){

const request = axios.get(`${root_url}/posts/${id}${api_key}`);

return {

	type: FETCH_POST,
	payload : request
};


}

export function deleteaPost(id,callback){

const request = axios.delete(`${root_url}/posts/${id}${api_key}`).then(()=> callback());

return {

	type: DELETE_POST,
	payload : id
};


}
