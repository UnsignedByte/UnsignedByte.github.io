window.oncontextmenu = function ()
{
    return false;     // cancel default menu
}
document.body.onmousedown = function (e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3;
    else if ("button" in e)  // IE, Opera
        isRightMB = e.button == 2;
    return !isRightMB;
}