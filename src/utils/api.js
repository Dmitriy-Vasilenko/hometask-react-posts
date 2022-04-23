import { config } from './config';

class Api {
    constructor({ url, token }){
        this._url = url;
        this._token = token;
    }

    getPosts(postID){
        const requestUrl = postID ? `${this._url}/posts/${postID}` : `${this._url}/posts`;
        return fetch(requestUrl, {
            headers: {
              authorization: `Bearer ${this._token}`
            }
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    deletePost(postID){
        return fetch(`${this._url}/posts/${postID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    getCurrentUser(){
        return fetch(`${this._url}/users/me`, {
            headers: {
              authorization: `Bearer ${this._token}`
            }
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    addLike(postID){
        return fetch(`${this._url}/posts/likes/${postID}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    deleteLike(postID){
        return fetch(`${this._url}/posts/likes/${postID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    
}

export default new Api(config);