import axios from "axios";
import {BASE_URL} from "../auth/baseUrl";
import UserManager from "../auth/UserManager";
import Cookie from "js-cookie";

const defaultOptions = {
    credential: false,
    contentType: 'application/json',
};

export async function sendRequest(method, url, data, options) {
    const headers = {};
    headers['Content-Type'] = options.contentType || defaultOptions.contentType;
    headers['Authorization'] = 'Bearer ' + UserManager.getToken();
    try {
        const res = await axios({
            baseURL: BASE_URL,
            url: url,
            method: method,
            headers: headers,
            data,
        });
        return {
            ok: true,
            data: res.data,
            headers: res.headers,
        };
    } catch (err) {
        return {
            ok: false,
            data: err.response && err.response.data ? err.response.data : null,
            err: err,
        };
    }
}

export async function sendGetRequestMiddleware (url, data, options = {}) {
    let sendRequestResponse = await sendGetRequest(url, data, options = {})
    if (sendRequestResponse && sendRequestResponse.err && sendRequestResponse.err.status === 401) {
        let getToken = await refreshToken('refresh');
        if (getToken && getToken.data && getToken.data.access_token) {
            UserManager.setLoggedInUserToken('access-token', getToken.data.access_token, 30)
            let final = await sendGetRequest(url, data, options = {})
            return final;
        } else return sendRequestResponse;

    } else {
        return sendRequestResponse;
    }
}

function refreshToken(url) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', "Bearer " + Cookie.get('refresh_token'));
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
    };
    return fetch(`${BASE_URL}${url}`, requestOptions)
        .then(res => {
            return res.json().then(data => {
                if (res.ok) {
                    return {ok: true, data};
                } else {
                    return {ok: false, err: res, data};
                }
            })
        });

}

function sendGetRequest(url, data, options = {}) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + UserManager.getToken());
    let requestOptions = {};
    if (data !== "none") requestOptions.body = data;
    requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(`${BASE_URL}${url}`, requestOptions)
        .then(res => {
            return res.json().then(data => {
                if (res.ok) {
                    return {ok: true, data};
                } else {
                    return {ok: false, err: res, data};
                }
            })
        });
}

