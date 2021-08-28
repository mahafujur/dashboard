import Cookie from "js-cookie";

const token = "access-token";
const refresh = "refresh-token";
const userInfo = "user";
const sessionExpTime = .15;

export function isLoggedIn() {
    if (Cookie.get(token)  &&  Cookie.get(userInfo) ) {
        return true;
    }
    return false;
}
function setLoggedInUserToken(tokenName,value,expDays ) {
    Cookie.set(tokenName,value, {expires: expDays ? expDays : ((1 / 24) * sessionExpTime)});
}

function setCookie(cName, cValue, expDays = 1) {
    Cookie.set(cName, cValue, {expires: expDays});
}

function getCookie(cName) {
    let result = Cookie.get(cName)
    return result;
}
function removeCookie(cName) {
    let result = Cookie.remove(cName)
    return result;
}

function getToken() {
    let cookie = Cookie.get(token)
    return cookie;
}
function getRefreshToken() {
    let cookie = Cookie.get(refresh)
    return cookie;
}


function getLoggedInUser() {
    let cookie = Cookie.get(token)
    let user = Cookie.get(userInfo);
    return user && cookie ? JSON.parse(user) : null;
}

function removeLoggedInUser() {
    Cookie.remove(token)
    Cookie.remove(userInfo);
    Cookie.remove(refresh);
}

function setLoggedInUser(user) {
    if (Cookie.get(token)) {
        Cookie.set(userInfo, JSON.stringify(user), {expires: 30});
    }
}
export default {
    setCookie,
    getCookie,
    setLoggedInUserToken,
    getLoggedInUser,
    setLoggedInUser,
    removeLoggedInUser,
    removeCookie,
    getToken,
    getRefreshToken

}
