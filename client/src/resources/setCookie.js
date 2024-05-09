function setCookie(cookiename, cookieVal, expireDays) {
    let expiresIn = "";
    if (expireDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        expiresIn = "; expiresIn=" + date.toUTCString();
    }
    cookieVal = encodeURIComponent(cookieVal);
    document.cookie = cookiename + "=" + cookieVal + expiresIn + ";path=/";
}

export default setCookie;
