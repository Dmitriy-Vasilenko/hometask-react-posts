import { config } from './config';

class Api {
    constructor({ url, token }){
        this._url = url;
        this._token = token;
    }

    getPosts(){
        return fetch(`${this._url}/posts`, {
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
}

export default new Api(config);