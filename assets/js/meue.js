function $(_sId) {
    return document.getElementById(_sId);
}
function exist(_sId) {
    var oObj = $(_sId);
    return oObj != null ? oObj : false;
}
function dw(_sTxt) {
    document.write(_sTxt);
}
function hide(_sId) {
    $(_sId).style.display = $(_sId).style.display == "none" ? "" : "none";
}
function onlyShow(_sId, _iNum, _sPic, _sTxt1, _sTxt2) {
    var i = 0;
    var oCurr = exist(_sId + i);
    while (oCurr) {
        oCurr.style.display = "none";
        $(_sPic + i).src = _sTxt2;
        i++;
        oCurr = exist(_sId + i)
    }
    $(_sId + _iNum).style.display = "";
    $(_sPic + _iNum).src = _sTxt1;
}
function swapShow(_sId) {
    var i = 0;
    var oCurr = exist(_sId + i);
    while (oCurr) {
        hide(_sId + i);
        i++;
        oCurr = exist(_sId + i)
    }
}
function seekKey(_sKey) {
    var i = 0;
    while (exist(_sKey + i)) {
        i++;
    }
    return i;
}
function swapPic(_sId, _sAttr, _sTxt1, _sTxt2) {
    $(_sId)[_sAttr] = $(_sId)[_sAttr].indexOf(_sTxt1) > -1 ? _sTxt2 : _sTxt1;
}
function swap(_sId, _sAttr, _sTxt1, _sTxt2) {
    $(_sId)[_sAttr] = $(_sId)[_sAttr] == _sTxt1 ? _sTxt2 : _sTxt1;
}
function moveGif(_sId) {
    swap(_sId, 'className', 'marginLeft2', '');
}
function moveStart(_sId) {
    __tmp__time = setInterval("moveGif('" + _sId + "')", 200);
}
function moveStop(_sId) {
    clearInterval(__tmp__time);
    $(_sId).className = "marginLeft2";
}
function switchShow() {
    hide('left');
    swapShow('hideLeft');
    swapShow('hideBody');
}
function scroll_to_top() {
    document.body.scrollTop = 0;
}
function mainFrameRedirect(url) {
    oo = document.getElementById("mainFrame");
    oo.url = url;
}