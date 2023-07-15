function changeAvatar() {
    const id = "avatar";
    const baseName = "olivia_santos_memoji_";
    const numberOfImages = 14;
    var index = getRandomNumber(numberOfImages);

    do {
        index = getRandomNumber(numberOfImages);
    } while (parseInt(getCookie("lastIndex"), 10) == index)

    document.getElementById(id).src = "images/" + baseName + index + ".png";
    setCookie("lastIndex", index, 1);
}

function getRandomNumber(top) {
    return Math.floor(Math.random() * top)
}

function setCookie(cookie_name, cookie_value, expiry_days) {
    var d = new Date();
    d.setTime(d.getTime() + (expiry_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
}

function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkPasscode() {
    const enc = "3a1f9e20f1beac9b81a1e18e08b7f442";
    var input = document.getElementById("inputCode").value;

    cookie = getCookie("videoshow");

    console.log(cookie);

    if (cookie == "yes" || md5(input) == enc) {
        document.getElementById("vid").style = "display:block;";
        document.getElementById("login").style = "display:none;";
        setCookie("videoshow", "yes", 30)
    } else {
        document.getElementById("vid").style = "display:none;";
        setCookie("videoshow", "no", 30)
    }
}

function setCopyright() {
    var cp = "© 2014-" + new Date().getFullYear() + " (c) Olivia Santos - All rights reserved.";
    document.getElementById("copyright").textContent = cp;
}

function onLoad() {
    setCopyright();
    changeAvatar();
}
