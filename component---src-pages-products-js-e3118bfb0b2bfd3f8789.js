(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),n=a.n(r),i=(a(159),a(168)),o=a.n(i),s=a(167),l=a(165),c=a(161),d=a(187);t.default=function(e){return n.a.createElement(s.a,null,n.a.createElement(l.a,{title:"Products",keywords:["Dotmote Labs","sapflow","iot"]}),n.a.createElement(c.a,{style:{height:"100%",position:"relative"}},n.a.createElement(o.a,{style:{width:"100%"},fluid:e.data.space.childImageSharp.fluid}),n.a.createElement("h1",{style:{color:"white",textShadow:"1px 1px 2px black",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},"Products")),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.0875rem 1.45rem"}},n.a.createElement(d.MDXRenderer,null,e.data.products.code.body)))};var u="994416219"},159:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(38),l=a.n(s);a.d(t,"a",function(){return l.a});a(160);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,a){var r;e.exports=(r=a(163))&&r.default||r},161:function(e,t,a){"use strict";var r=a(8),n=a.n(r),i=a(0),o=a.n(i),s=a(170),l=Object(s.a)(function(e){var t=e.className,a=e.children,r=e.style;return o.a.createElement("div",{className:t,style:n()({},r)},a)}).withConfig({displayName:"StyledSplashBlock",componentId:"sc-12inpub-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;text-align:center;"]);t.a=l},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Dotmote Labs"}}}}},163:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),i=a(0),o=a.n(i),s=a(4),l=a.n(s),c=a(58),d=a(2),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,n()({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},164:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZDY2MDYwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1eiIvPgo8L3N2Zz4="},165:function(e,t,a){"use strict";var r=a(166),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(171),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Dotmote Labs",description:"For all of your plant physiology IOT needs",author:"@dotmotelabs"}}}}},167:function(e,t,a){"use strict";var r=a(162),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(159),c=a(7),d=a.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return i.a.createElement("header",{style:{position:"absolute",zIndex:10,width:"100vw"}},i.a.createElement("h1",{style:{margin:0,padding:"1.45rem 1.0875rem"}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none",textShadow:"1px 1px 2px black"}},e)))},t}(n.Component);u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var f=u,p=(a(169),a(164)),h=a.n(p),m=a(161),g=function(e){var t=e.children;return i.a.createElement(l.b,{query:"86343720",render:function(e){return i.a.createElement("div",null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement(m.a,{style:{height:"100%",background:"#F6AE2D",padding:"2rem 2rem"}},i.a.createElement("div",null,i.a.createElement("h2",null,i.a.createElement(l.a,{to:"/products",style:{color:"white",textDecoration:"none"}},"Products")),i.a.createElement("h2",null,i.a.createElement(l.a,{to:"/research",style:{color:"white",textDecoration:"none"}},"Research")),i.a.createElement("h2",null,i.a.createElement(l.a,{to:"/about",style:{color:"white",textDecoration:"none"}},"About")),i.a.createElement("h2",null,i.a.createElement(l.a,{to:"/contact-us",style:{color:"white",textDecoration:"none"}},"Contact Us")))),i.a.createElement("footer",{style:{textAlign:"center",paddingTop:"1em",paddingBottom:"1em"}},"© ",(new Date).getFullYear(),", Made with"," ",i.a.createElement("img",{className:"svg-icon",src:h.a,alt:"heart icon"})," in Seattle, San Francisco, and San Diego")))},data:r})};g.propTypes={children:s.a.node.isRequired};t.a=g},168:function(e,t,a){"use strict";var r=a(9);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(39)),s=r(a(81)),l=r(a(82)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+o+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},u,{onLoad:o,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,I=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,l.default)({opacity:S?1:0,transition:I?"opacity 0.5s":"none"},s),x="boolean"==typeof b?"lightgray":b,L={transitionDelay:"0.5s"},D=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&L,s,f),M={title:t,alt:this.state.isVisible?"":a,style:D,className:p};if(h){var R=h;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),x&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&L)}),R.base64&&c.default.createElement(y,(0,l.default)({src:R.base64},M)),R.tracedSVG&&c.default.createElement(y,(0,l.default)({src:R.tracedSVG},M)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(m){var j=m,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete N.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},x&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:x,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},I&&L)}),j.base64&&c.default.createElement(y,(0,l.default)({src:j.base64},M)),j.tracedSVG&&c.default.createElement(y,(0,l.default)({src:j.tracedSVG},M)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=b;t.default=S},187:function(e,t,a){var r=a(188);e.exports={MDXRenderer:r}},188:function(e,t,a){var r=a(189);a(59),a(40),a(29),a(191);var n=a(8),i=a(81),o=a(0),s=a(56),l=s.useMDXComponents,c=s.mdx,d=a(72).useMDXScope;e.exports=function(e){var t=e.scope,a=e.components,s=e.children,u=i(e,["scope","components","children"]),f=l(a),p=d(t);if(!s)return null;var h=n({React:o,mdx:c},p),m=Object.keys(h),g=m.map(function(e){return h[e]}),y=r(Function,["_fn"].concat(m,[""+s])).apply(void 0,[{}].concat(g));return o.createElement(y,n({components:f},u))}},189:function(e,t,a){var r=a(190);function n(t,a,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=n=function(e,t,a){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return a&&r(i,a.prototype),i}:e.exports=n=Reflect.construct,n.apply(null,arguments)}e.exports=n},190:function(e,t){function a(t,r){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},191:function(e,t,a){var r=a(28),n=a(27);a(192)("keys",function(){return function(e){return n(r(e))}})},192:function(e,t,a){var r=a(10),n=a(20),i=a(21);e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],o={};o[e]=t(a),r(r.S+r.F*i(function(){a(1)}),"Object",o)}}}]);
//# sourceMappingURL=component---src-pages-products-js-e3118bfb0b2bfd3f8789.js.map