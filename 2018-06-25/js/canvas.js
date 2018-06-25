"use strict";!function(t){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a=1;var r=function(t){t.points?this.points=t.points:t.path&&(this.points=function(t){var i,s,e,h,n,o,a,r,c,p=[];for(a=0;a<t.length-1;a++)for(i=t[a],s=t[a+1],e=Math.floor((r=i,c=s,Math.sqrt((r[0]-c[0])*(r[0]-c[0])+(r[1]-c[1])*(r[1]-c[1])))),h=(s[0]-i[0])/e,n=(s[1]-i[1])/e,o=0;o<e;)o++,p.push([i[0]+h*o,i[1]+n*o]);return p}(t.path)),this.points||(this.points=[]),this.step=0,this.old=[],this.brush=t.brush||"#fff",this.shadowColor=t.shadowColor||"#fff",this.shadowBlur=t.shadowBlur||0,this.radius=t.radius||1,this.speed=t.speed||1,this.progress=0};r.prototype={get plength(){return this.points.length},paint:function(t){var i=!0;for(this.progress+=this.speed;this.step<this.progress&&this.step<this.plength;)this.draw(t),this.step++,i=!1;i&&this.draw(t),this.step>=this.plength&&(this.step=0,this.progress-=this.plength)},draw:function(t){var i=this.points[this.step][0],s=this.points[this.step][1];this.old[0]==i&&this.old[1]==s||(this.old=[i,s],t.save(),t.fillStyle=this.brush,t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.beginPath(),t.arc(i,s,this.radius,0,2*Math.PI),t.fill(),t.closePath(),t.restore())}};var h=function(t){this.radius=t.radius||7,this.c=t.c,this.brush=t.brush||"#fff",this.width=t.width||1};h.prototype={paint:function(t){t.save(),t.strokeStyle=this.brush,t.lineWidth=this.width,t.beginPath(),t.arc(this.c[0],this.c[1],this.radius,0,2*Math.PI),t.stroke(),t.closePath(),t.restore()}};var c=function(t){this.path=t.path,this.brush=t.brush||"#fff",this.width=t.width||1};c.prototype={paint:function(t){var i=0;for(t.save(),t.strokeStyle=this.brush,t.lineWidth=this.width,t.lineJoin="round",t.lineCap="round",t.beginPath(),t.moveTo(this.path[i][0],this.path[i][1]),i++;i<this.path.length;)t.lineTo(this.path[i][0],this.path[i][1]),i++;t.stroke(),t.closePath(),t.restore()}},t.initCanvas=function(t){var s=function(t){var i,s,e=document.createElement("canvas");if("string"==typeof t&&(t=document.getElementById(t)),t&&1===t.nodeType&&"CANVAS"===t.nodeName){i=t.getContext("2d");var h=window.devicePixelRatio||1,n=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1;return a=h/n,t.width=t.clientWidth*a,t.height=t.clientHeight*a,i.scale(a,a),e.width=t.width,e.height=t.height,(s=e.getContext("2d")).scale(a,a),{ctx:i,tctx:s}}return console.error("El is not a Canvas"),!1}(t),n=[],o=[];return function t(){s.tctx.fillStyle="rgba(0,0,0,.95)";var i=s.tctx.globalCompositeOperation;s.tctx.globalCompositeOperation="destination-in",s.tctx.fillRect(0,0,s.tctx.canvas.width/a,s.tctx.canvas.height/a),s.tctx.globalCompositeOperation=i,o.forEach(function(t){t.paint(s.tctx)}),s.ctx.clearRect(0,0,s.ctx.canvas.width/a,s.ctx.canvas.height/a),n.forEach(function(t){t.paint(s.ctx)}),s.ctx.globalCompositeOperation="source-over",s.ctx.drawImage(s.tctx.canvas,0,0,s.tctx.canvas.width/a,s.tctx.canvas.height/a),e(function(){t()})}(),{drawTrail:function(t){o.push(new r({path:t}))},drawHexagon:function(t,i,s){for(var e=function(t,i){var s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"vertical";if(t&&i&&2===t.length){var e=i/2*Math.sqrt(3);return"vertical"===s?[[t[0],t[1]-i],[t[0]-e,t[1]-i/2],[t[0]-e,t[1]+i/2],[t[0],t[1]+i],[t[0]+e,t[1]+i/2],[t[0]+e,t[1]-i/2],[t[0],t[1]-i]]:[[t[0]-i,t[1]],[t[0]-i/2,t[1]-e],[t[0]+i/2,t[1]-e],[t[0]+i,t[1]],[t[0]+i/2,t[1]+e],[t[0]-i/2,t[1]+e],[t[0]-i,t[1]]]}return[]}(t,i,s),h=0;h<e.length-1;h++)o.push(new r({path:[e[h],e[h+1]],speed:1}));n.push(new c({path:e,brush:"rgba(255,255,255,.4)"})),n.push(new c({path:[e[0],e[2],e[5],e[3],e[1],e[4],e[6]],brush:"rgba(255,255,255,.5)"})),o.push(new r({path:[e[0],e[2],e[5],e[3],e[1],e[4],e[6]],speed:2})),o.push(new r({path:[e[3],e[5],e[2],e[6],e[4],e[1],e[3]],speed:3}))},drawCircle:function(t,i,s){var e=function(t,i){for(var s=[],e=1/i,h=0;h<2*Math.PI;)s.push([t[0]+Math.sin(h)*i,t[1]-i*Math.cos(h)]),h+=e;return s.push([t[0],t[1]-i]),s}(t,i);s&&e.reverse(),o.push(new r({points:e})),n.push(new h({c:t,radius:i,brush:"rgba(255,255,255,.4)"}))}}}}(window);
//# sourceMappingURL=canvas.js.map
