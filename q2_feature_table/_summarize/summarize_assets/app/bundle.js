webpackJsonp([0],[function(e,n,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l=a(1),o=r(l);(0,o.default)(t,m,c)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),l=a(r),o=n(4),u=a(o),i=n(5),c=a(i),d=function(e,t,n){(0,l.default)(),(0,u.default)(n),(0,c.default)(t)};t.default=d},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),l=a(r),o=function(){var e=l.select("#slider"),t=l.select("#slider-value");t.on("input",function(){+t.node().value>+e.node().max?(t.node().value=e.node().max,e.node().value=e.node().max):e.node().value=t.node().value}),t.on("change",function(){t.node().value||(t.node().value=0,e.node().value=e.node().min)}),e.on("input.slide",function(){t.node().value=e.node().value,l.select("tbody").selectAll("tr").attr("class",function(t){return+t[1]<+e.node().value?"alert-danger":""})}),t.node().value=e.node().value};t.default=o},,function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.myTableData=void 0;var l=n(3),o=a(l),u=t.myTableData=[],i=function(e){var t=o.select("#table").append("table"),n=t.append("thead").append("tr"),a=t.append("tbody"),l=o.select(".form-group").append("span");Object.keys(e).forEach(function(t){return u.push([t,e[t]])}),t.attr("class","table table-hover"),n.selectAll("th").data(["Sample ID","Feature Count"]).enter().append("th").text(function(e){return e});var i=a.selectAll("tr").data(u).enter().append("tr");i.selectAll("td").data(function(e){return e}).enter().append("td").text(function(e){return e});var c=function(){var e=u.reduce(function(e,t){return e+(t[1]<+o.select("#slider").node().value?1:0)},0);return[e," ("+(e/u.length*100).toFixed(2)+"%)"]};l.append("div").selectAll("span").data(["Sample Loss: "].concat(r(c()))).enter().append("span").text(function(e){return e}),o.select("#slider").on("input.calc",function(){l.selectAll("span").data(["Sample Loss: "].concat(r(c()))).text(function(e){return e})})};t.default=i},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t,n){var a=u.select("select").node().value,l=Object.keys(t[a]).map(function(e){return t[a][e]}),o=!isNaN(l.reduce(function(e,t){return e+ +t},0)),i=[].concat(r(new Set(l)));e.selectAll("g").remove(),e.selectAll("rect").remove();var c=e.append("g").attr("transform","translate("+n.margin.left+", "+n.margin.top+")"),d=Math.min.apply(Math,r(l)),s=Math.max.apply(Math,r(l)),f=o?u.scaleLinear().domain([d-.03*(s-d),s]):u.scaleOrdinal().domain(i);f.range([0,n.width]);var p=u.histogram().domain(f.domain())(l),v=u.scaleLinear().domain([0,u.max(p,function(e){return e.length})]).range([n.height,0]),h=c.selectAll(".bar").data(p).enter().append("g").attr("class","bar").attr("transform",function(e){return"translate("+f(e.x0)+", "+v(e.length)+")"});h.append("rect").attr("x",1).attr("width",f(p[0].x1)-f(p[0].x0)-1).attr("height",function(e){return n.height-v(e.length)}),c.append("g").attr("class","axis axis--x").attr("transform","translate(0, "+n.height+")").call(u.axisBottom(f)),c.append("g").attr("class","axis axis--y").call(u.axisLeft(v))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=a(o),i=function(e){var t={top:10,right:30,bottom:30,left:40},n={margin:t,width:960-t.left-t.right,height:500-t.top-t.bottom},a=u.select("#histogram").append("svg").attr("class","text-center").attr("width",n.width+n.margin.left+n.margin.right).attr("height",n.height+n.margin.top+n.margin.bottom),r=u.select(".form-group").append("select").attr("class","form-control").on("change",function(){return l(a,e,n)});r.selectAll("option").data(Object.keys(e)).enter().append("option").text(function(e){return e}),l(a,e,n)};t.default=i}]);