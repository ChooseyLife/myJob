/**
 * Created by Administrator on 2016/12/16.
 */

;(function () {
    var globalUrl = "";
    //var globalUrl = "";
    addEvent("span");
    addEvent("em");
    addEvent("p");
    addEvent("div");
    addBack();
    /*var init={
        _init:function addEvent(elem) {
            var getEle  = arguments[0];
            $(getEle).each(function (i, ele) {
                var href = this.attr("href");
                if(!href){
                    ele.click(function () {
                        location.href = href;
                    })
                }
            })
        }
    };*/
})();

//为ele上添加href事件
function addEvent(ele) {
    //获得所有的ele
    var getEle  = arguments[0];
    $(getEle).each(function (index, el) {
        //获得href属性
        var href = el.getAttribute("reurl");
        if (href) {
            return (function (url) {
                el.addEventListener('click', function () {
                    location.href = url;
                });
            })(href);
        }
    });
}

//返回上一页
function addBack(){
    $(".back2").click(function(){
        window.history.back();
    })
}

//获取url后面指定的参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}