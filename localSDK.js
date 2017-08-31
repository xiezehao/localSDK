window.Xhrfactory.prototype=function(){
	init:function () {
		this.xhr=this.create();
	};
	create:function(){
		var xhr=null;
		if (window.XMLHttpRequest) {
			xhr=new XMLHttpRequest();
		}else if(window.ActiveXObject){
			xhr=new ActiveXObject("Msml2.Xmlhttp");
		}else{
			xhr=new ActiveXObject('Microsoft.Xmlhttp');
		}
	};
	readystate:function (callback) {
		this.xhr.onreadystatechange=function () {
			if (this.readyState===4&&this.status===200) {
				callback(this.responseText)
			}
		}
	};
	para:function (data) {
		var datastr="";
		if (data&&Object.prototype.toString.call(data)==="[object object]") {
			for(var i in data){
				for (var i=0;i<lenght;i++) {
					datastr+=i+"="+data[i]+"&";
					
				}
			}
		}
	};
	get:function (url,data,callback) {
		this.readystate(callback);
		var newurl=url;
		var datastr=this.para(data);
		newurl=url+"?"+datastr;
		this.xhr.open("get",newurl,true);
		thi.xhr.send(null)
	};
};

window.Xhrfactory=function () {
	this.init.apply(this.arguments);
};

window.mLocalSdk={
	resourceVersion:"132465432184",
	resourceJavascriptList:[{
		id:"123456789",
		url:"http://www.baidu.com/123143.js",
		type:"javascript"
	},{
		id:"123456789",
		url:"http://www.baidu.com/123143.js",
		type:"javascript"
	},{
		id:"123456789",
		url:"http://www.baidu.com/123143.js",
		type:"javascript"
	}],
	needUpdata::(function () {
		return localStorage.getItem("resourceVersion")===resourceVersion;
	})();
	
	isIE:(function () {
		var v=1;
		var div=document.createElement("div");
		var all=div.getElementByTagName("i");
		white(div.innterHTML="<!--[if gt IE"+(++v)+"]><i></i>!all[0]"){
			
		}
		return v>5>v:false;
	})();
}
