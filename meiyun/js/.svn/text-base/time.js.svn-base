
(function($){
	var i = 0;
	function Plugin(elem){
		this.elem = elem;

		this._bindEvent();

		this.id = i;;
		i++;
	}

	Plugin.prototype._bindEvent = function(){
		var that = this;

		this.elem.on('click',function(){
			that._open();
		})

		$("body").on('click',".mask",function(){
			that._close();
		});

		$('body').on('click',".day_box ul li",function(){
			$(this).addClass("on").siblings().removeClass("on");
			var forId = $('.time_box1').data('forid');
			if(forId == that.id){
				that._title();
			}
		});

		$("body").on('click',".time ul li",function(){
			$(this).addClass("on").siblings().removeClass("on");
			var forId = $('.time_box1').data('forid');
			
			if(forId == that.id){
				that._title();
			}
		});

		
	}

	Plugin.prototype._open = function(){
		$("body").append(this._tpl());
		$(".time_box1,.mask").show();
		$('.time_box1').addClass("on")
	}

	Plugin.prototype._close = function(){
		$(".time_box1,.mask").remove();
	}

	Plugin.prototype._check =  function(){
		if($(".day_box ul li.on").length){
			if($(".time ul li.on").length){
				return true;
			}else{
				
				return false;
			}
		}else{
			alert("请选择预约日期");
			return false;
		}
	}
	Plugin.prototype._check2 =  function(){
		if($(".time ul li.on").length){
				return true;
			}else{
				
				return false;
			}
	}

	Plugin.prototype._title =  function (){
		if(!this._check()) return;
		if(!this._check2()) return;

		var time   =$('.time .on').text();
		var day    =$('.day_box .on p').text();
		var _date =day +"  "+ time;
		this.elem.text(_date);
		this.elem.css("color","#000")
		this._close();
		
	}

	Plugin.prototype._tpl = function(){
		var mydate = new Date();  //获取当前时间
	    var dayArr = [];     //定义一个数组存储所以时间
	    var numberArr =[];
	    var weekday=["周日","周一","周二","周三","周四","周五","周六"];
	    var tpl = "";
	    tpl +='<div class="time_box1" data-forid="'+this.id+'">';
	    tpl +='<div><p class="title">请选择预约时间</p></div>';
	    tpl +='<div class="day_box"><ul>';
		    for(var i = 0;i<7;i++){
		    	var day = "";
		    	var number = "";
		    	// console.log(i);
		    	(function(d){
		    		var day = new Date(mydate.getTime() +  24 * 3600 * 1000 * d).getDate();
		    		var Month =new Date(mydate.getTime() +  24 * 3600 * 1000 * d).getMonth();
		    		var _Month = Month + 1;
		    		if(_Month<10){_Month = 0+""+_Month};
		    		if(day<10) {day = 0+""+day};
		    		time = _Month +"."+ day;
		    		number = weekday[(mydate.getDay() + d)%7];//获取一周以后的星期数
		    		dayArr.push(time);
		    		numberArr.push(number);
		    		if(d == 0){
				    		tpl += '<li><span>今天</span><p>'+dayArr[d]+'</p></li>';
				    	}else if(d == 1){
				    		tpl += '<li><span>明天</span><p>'+dayArr[d]+'</p></li>';
				    	}else if(d == 2){
				    		tpl += '<li><span>后天</span><p>'+dayArr[d]+'</p></li>';
				    	}else{
				    		tpl += '<li><span>'+numberArr[d]+'</span><p>'+dayArr[d]+'</p></li>';
				    	}
		    	})(i);
		    }
		    tpl +='</ul></div>';
		    tpl += this._timetpl();
		    tpl +='</div>';
		    tpl +='<div class="mask"></div>';
		    
		    return tpl;
	}

	Plugin.prototype._timetpl = function(){
		var timetpl = "";
		timetpl +='<div class="time"><ul>';
		for(var i = 0; i<12; i++){
			(function(){
				var _i = i+10;
				timetpl += '<li>'+_i+':00</li>'
			})(i)
		}
		timetpl +='</ul></div>';
		return timetpl;
	}

	$.fn.extend({
		_time:function(){
			new Plugin($(this));
		}
	});



})($);

	
