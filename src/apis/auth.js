import {
    sendGetRequestMiddleware,
    sendRequest
} from "../libs/FetchApi";

export function login(data) {
    return sendRequest('POST', 'login', data, {});
}

export function dashboard() {
    return sendGetRequestMiddleware('dashboard', null);
}

export function orders(url) {
    return sendGetRequestMiddleware(url, null);
}

export default {
    login,
    dashboard,
    orders,
}
