(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(t,n,e){t.exports=e(12)},function(t,n,e){},,,,,,function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(5);var r=e(0),a=e.n(r),o=e(3),c=e.n(o),u=e(1),i=(e(11),function(t,n){var e=~~n%t.length,r=n%1;if(r<.6)return t[e];var a=(r-.6)/.4,o=a*a*(3-2*a);return t[e]*(1-o)+t[(e+1)%t.length]*o}),f=Math.PI,h=function(t,n,e,r){var a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(u.a)(n,2),f=i[0],h=i[1],s=Math.hypot(o-f,c-h),l=(e*e-r*r+s*s)/2/s,v=Math.sqrt(e*e-l*l);return[o+l*(f-o)/s+v*(h-c)/s,c+l*(h-c)/s-v*(f-o)/s]};c.a.render(a.a.createElement(function(){var t=Object(r.useRef)(null);return Object(r.useEffect)(function(){if(t.current){var n=t.current,e=n.getContext("2d");if(e){e.translate(.5,.5);var r=function(t){return{line:function(n,e){t.moveTo(n[0],n[1]),t.lineTo(e[0],e[1])}}}(e).line,a=Date.now(),o=function(t,n){var e=Object(u.a)(t,2),r=e[0],a=e[1],o=(n-.5)*f/6+f/2;return[r-50*Math.cos(o),a-50*Math.sin(o)]},c=[100,60],s=[100,110],l=h(c,s,30,30);return l[0]+=10,function t(){return requestAnimationFrame(function(){var u=(Date.now()-a)/2e3;e.clearRect(0,0,n.width,n.height),e.strokeStyle="#fff",e.beginPath();var f=o(c,i([0,1,1,0],u));r(c,f);var v=o(s,i([0,0,1,1],u));r(s,v);var w=h(f,v,30,30);r(f,w),r(v,w);var b=h(w,l,10,50);r(w,b),r(l,b),e.stroke(),t()})}(),function(){}}}}),a.a.createElement("canvas",{ref:t,width:300,height:300})},null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.1be416ba.chunk.js.map