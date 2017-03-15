window.onload=function(){
	// 查找所有的li标签
	var Lis=document.getElementsByTagName("li");
	for(i=0;i<Lis.length;i++){
		Lis[i].i=i;
		Lis[i].onmouseover=function(){
			this.className="lihover";
			// 此处是进行submenu的显示优化。利用菜单的索引数，知道此li在整个菜单中排第几位,然后根据高度进行submenu显示位置的调整。
			var h0=(this.i-1)*30+42;
			var y=this.getElementsByTagName("div")[0].offsetHeight;
			var h=this.getElementsByTagName("div")[0].style.top+y;  //得到悬浮层上檐距离页面顶端的高度
			if (h<h0){
				this.getElementsByTagName("div")[0].style.top=h0+"px";
			}
			if(y>550){
				this.getElementsByTagName("div")[0].style.top="3px";
			}
		}
		Lis[i].onmouseout=function(){
			this.className="";
		}
	}
}
