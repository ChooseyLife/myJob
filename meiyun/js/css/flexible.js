"use strict";
(function(e) {
    var i = 1
      , n = window.navigator.userAgent;
    var t = n.match(/iphone/i);
    var d = n.match(/yixin/i);
    var w = n.match(/Mb2345/i);
    var o = n.match(/mso_app/i);
    var s = n.match(/sogoumobilebrowser/gi);
    var h = n.match(/liebaofast/i);
    var r = n.match(/GNBR/i);
    function a() {
        var e = screen.width > 0 ? window.innerWidth >= screen.width || window.innerWidth == 0 ? screen.width : window.innerWidth : window.innerWidth, i, n;
        if (window.devicePixelRatio) {
            i = window.devicePixelRatio
        } else {
            i = t ? e > 818 ? 3 : e > 480 ? 2 : 1 : 1
        }
        if (t)
            e = screen.width;
        n = e > 1080 ? 144 : e / 7.5;
        n = n > 32 ? n : 32;
        window.screenWidth_ = e;
        if (d || w || o || s || h || r) {
            setTimeout(function() {
                e = screen.width > 0 ? window.innerWidth >= screen.width || window.innerWidth == 0 ? screen.width : window.innerWidth : window.innerWidth;
                n = e > 1080 ? 144 : e / 7.5;
                n = n > 32 ? n : 32;
                document.getElementsByTagName("html")[0].dataset.dpr = i;
                document.getElementsByTagName("html")[0].style.fontSize = n + "px";
            }, 500)
        } else {
            document.getElementsByTagName("html")[0].dataset.dpr = i;
            document.getElementsByTagName("html")[0].style.fontSize = n + "px";
        }
    }
    function c() {
        if (t) {
            wWidth = screen.height;
        } else {
            if (d || w || o || s || h || r) {
                wWidth = screen.width;
                setTimeout(function() {
                    wWidth = screen.width > 0 ? window.innerWidth >= screen.width || window.innerWidth == 0 ? screen.width : window.innerWidth : window.innerWidth;
                    wHeight = screen.height > 0 ? window.innerHeight >= screen.height || window.innerHeight == 0 ? screen.height : window.innerHeight : window.innerHeight;
                    wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
                    wFsize = wFsize > 32 ? wFsize : 32;
                    document.getElementsByTagName("html")[0].dataset.dpr = wDpr;
                    document.getElementsByTagName("html")[0].style.fontSize = wFsize + "px";
                }, 500)
            } else {
                wWidth = screen.width
            }
        }
        window.screenWidth_ = wWidth;
        wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
        wFsize = wFsize > 32 ? wFsize : 32;
        document.getElementsByTagName("html")[0].style.fontSize = wFsize + "px"
    }
    if ("onorientationchange" in window) {
        window.onorientationchange = function() {
            if (window.orientation == 90 || window.orientation == -90) {
                c();
                document.body.classList.add("resize")
            } else if (window.orientation == 180 || window.orientation == 0) {
                a();
                document.body.classList.remove("resize")
            }
        }
    } else {
        window.onresize = function() {
            a();
            document.body.classList.toggle("resize")
        }
    }
    a()
})(window.NEWAP = window.NEWAP || {});