// window.onload = function(){
		/*圆形坐标点*/
		arr = [
  			{x:150, y:150,link:'detail.html',text:'北门'},
		    {x:160, y:380,link:'detail.html',text:'西门'},
		    {x:360, y:230,link:'detail.html',text:'东门'},
		    {x:310, y:500,link:'detail.html',text:'南门'},
		    {x:400, y:600,link:'detail.html',text:'正门'},
		    {x:700, y:610,link:'detail.html',text:'侧门'},
		    {x:550, y:450,link:'detail.html',text:'东门'},
		    {x:580, y:240,link:'detail.html',text:'东门'},
		    {x:750, y:150,link:'detail.html',text:'东门'},
		    {x:850, y:450,link:'detail.html',text:'东门'}
		];
 
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
		canvas.width=1024;
		canvas.height = 800;

	    canvas.addEventListener('click', function(e){
	  		p = getEventPosition(e);
	  		drawLine();	
	 		var who = drawArc(p);
	 		console.log(who)
	 		window.location.href = who   //页面跳转
		}, false);

		
		drawLine();
		drawArc();

		function drawLine(){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.beginPath();
			context.moveTo(arr[0].x, arr[0].y)
			for(var i=1;i<arr.length;i++){
				context.lineTo(arr[i].x,arr[i].y);
			}
			context.strokeStyle="#999";
		    context.stroke();
		}
		/*构造出图形，并且判断参数，如果传入参数，则执行点击事件*/
		function drawArc(p){
		  var who = [];
		  // context.clearRect(0, 0, canvas.width, canvas.height);
		  arr.forEach(function(v, i){

		  	context.beginPath();
		    context.font="18px serif";
		    context.fillStyle="#554";
			context.fillText(v.text, v.x+30,v.y+5);	//绘制文字

		    context.beginPath();
		    context.arc(v.x,v.y,20,0,Math.PI*2);	//绘制小圆圈
		   	
		   	context.shadowOffsetX = 2; // 设置水平位移
			context.shadowOffsetY = 2; // 设置垂直位移
			context.shadowBlur = 6; // 设置模糊度
			context.shadowColor = "rgba(0,0,0,0.3)"; // 设置阴影颜色

		    context.fillStyle="#f60";
		    context.fill();

		    if(p && context.isPointInPath(p.x, p.y)){
		      //如果传入了事件坐标，就用isPointInPath判断一下
		      //如果当前环境覆盖了该坐标，就将当前环境的index值放到数组里
		      who.push(v.link);
		    }
		  });
		  //根据数组中的index值，可以到arr数组中找到相应的元素。
		  return who;
		}
		/*canvas中的鼠标点击位置*/
		function getEventPosition(ev){
		  var x, y;
		  if (ev.layerX || ev.layerX == 0) {
		    x = ev.layerX;
		    y = ev.layerY;
		  } else if (ev.offsetX || ev.offsetX == 0) { // Opera
		    x = ev.offsetX;
		    y = ev.offsetY;
		  }
		  return {x: x, y: y};
		}
	// }