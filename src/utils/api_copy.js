

class Api {
    constructor({ url, token }) {
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

    addPost(post){
        return fetch(`${this._url}/posts`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
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

    editCurentUser(updatedUserInfo) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserInfo),
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

    getCommentUser(userID){
        return fetch(`${this._url}/users/${userID}`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    signUp(userData) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }

    signIn(userData) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .catch((err) => err.message)
    }
}

export default Api;
