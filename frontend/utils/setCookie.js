export default function (name, value, years = 10) {
    var expires = "";
    if (value) {
        var date = new Date();
        date.setTime(date.getTime() + (years * 365 * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}