webpackJsonp([0],[function(e,n,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var l=a(1),o=r(l);(0,o.default)(t,m,c)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),l=a(r),o=n(4),u=a(o),i=n(5),c=a(i),s=function(t,e,n){(0,l.default)(),(0,u.default)(n),(0,c.default)(e)};e.default=s},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),l=a(r),o=function(){var t=l.select("#slider"),e=l.select("#slider-value");e.on("input",function(){+e.node().value>+t.node().max?(e.node().value=t.node().max,t.node().value=t.node().max):t.node().value=e.node().value}),e.on("change",function(){e.node().value||(e.node().value=0,t.node().value=t.node().min)}),t.on("input.slide",function(){e.node().value=t.node().value,l.select("tbody").selectAll("tr").attr("class",function(e){return+e[1]<+t.node().value?"alert-danger":""})}),e.node().value=t.node().value};e.default=o},,function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.myTableData=void 0;var l=n(3),o=a(l),u=e.myTableData=[],i=function(t){var e=o.select("#table").append("table"),n=e.append("thead").append("tr"),a=e.append("tbody"),l=o.select(".form-group").append("span");Object.keys(t).forEach(function(e){return u.push([e,t[e]])}),e.attr("class","table table-hover"),n.selectAll("th").data(["Sample ID","Feature Count"]).enter().append("th").text(function(t){return t});var i=a.selectAll("tr").data(u).enter().append("tr");i.selectAll("td").data(function(t){return t}).enter().append("td").text(function(t){return t});var c=function(){var t=u.reduce(function(t,e){return t+(e[1]<+o.select("#slider").node().value?1:0)},0);return[t," ("+(t/u.length*100).toFixed(2)+"%)"]};l.append("div").selectAll("span").data(["Sample Loss: "].concat(r(c()))).enter().append("span").text(function(t){return t}),o.select("#slider").on("input.calc",function(){l.selectAll("span").data(["Sample Loss: "].concat(r(c()))).text(function(t){return t})})};e.default=i},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.dropSampleMetadata=e.addSampleMetadata=void 0;var l=n(3),o=a(l),u=[],i=function(t,e,n){return n?o.histogram().domain(e.domain())(t):o.histogram()(t.map(e))},c=function(t,e,n,a){var r=o.select("select").node().value,l=Object.keys(t[r]).filter(function(t){return!u.includes(t)}),c=l.map(function(e){return t[r][e]}),s=!isNaN(c.reduce(function(t,e){return t+ +e},0)),d=i(c,n,s);o.selectAll(".overlay-group").data(d).attr("style",function(t){var n=o.select(this).node().parentNode,r=o.select(n).select("rect").node().getBBox().height;return"transform: translate(0, "+(r-(e.height-a(t.length)))+"px)"}).select(".overlay").attr("height",function(t){return e.height-a(t.length)})},s=e.addSampleMetadata=function(t){u.includes(t)&&(u=u.filter(function(e){return e!==t}))},d=e.dropSampleMetadata=function(t){u.includes(t)||u.push(t)},f=function(t,e,n){var a=o.select("select").node().value,l=Object.keys(e[a]).map(function(t){return e[a][t]}),u=!isNaN(l.reduce(function(t,e){return t+ +e},0)),f=[].concat(r(new Set(l)));t.selectAll("g").remove(),t.selectAll("rect").remove();var p=t.append("g").attr("transform","translate("+n.margin.left+", "+n.margin.top+")"),h=Math.min.apply(Math,r(l)),v=Math.max.apply(Math,r(l)),g=u?o.scaleLinear().domain([h-.03*(v-h),v]).range([0,n.width]):o.scaleBand().domain(f).rangeRound([0,n.width]),m=i(l,g,u),y=o.scaleLinear().domain([0,o.max(m,function(t){return t.length})]).range([n.height,0]),x=p.selectAll(".bar").data(m).enter().append("g").attr("class","bar").attr("transform",function(t){return"translate("+(u?g(t.x0):t.x0)+", "+y(t.length)+")"}),b=o.axisBottom(g),A=o.axisLeft(y),M=function(t){return u?Math.floor(g(g.ticks(b.ticks()[0])[1])-g(g.ticks(b.ticks()[0])[0]))-1:t.x0===t.x1?50:t.x1-t.x0-1};x.append("rect").attr("x",1).attr("width",M).attr("height",function(t){return n.height-y(t.length)}),x.append("g").attr("class","overlay-group").append("rect").attr("class","overlay").attr("x",1).attr("width",M).attr("height",function(t){return n.height-y(t.length)}),p.append("g").attr("class","axis axis--x").attr("transform","translate(0, "+n.height+")").call(b),f.length>5&&p.selectAll("text").attr("y",0).attr("x",9).attr("dy",".35em").attr("transform","rotate(90)").style("text-anchor","start"),p.append("g").attr("class","axis axis--y").call(A),o.select("#slider").on("input.drop",function(){o.select("tbody").selectAll("tr").each(function(t){return+t[1]<+o.select("#slider").node().value?d(t[0]):s(t[0])}),c(e,n,g,y)})},p=function(t){var e={top:10,right:30,bottom:30,left:40},n={margin:e,width:960-e.left-e.right,height:500-e.top-e.bottom},a=o.select("#histogram").append("svg").attr("width",n.width+n.margin.left+n.margin.right).attr("height",600+n.margin.top+n.margin.bottom),r=o.select(".form-group").append("select").attr("class","form-control").on("change",function(){return f(a,t,n)});r.selectAll("option").data(Object.keys(t)).enter().append("option").text(function(t){return t}),f(a,t,n)};e.default=p}]);