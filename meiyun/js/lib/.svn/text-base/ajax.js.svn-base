/**
 * 莫培基 ajax二次封装
 * @param url
 * @param json
 * @param callback
 */


function jsonajax(url,json,callback){
	$.ajax({
		type: "post",
        url:url,
        dataType: "json",
        async: true,
        cache: false,
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        data: JSON.stringify(json),
		success:callback,
		error: function (err) {
			alert('数据加载错误');
		}
	});	 
};