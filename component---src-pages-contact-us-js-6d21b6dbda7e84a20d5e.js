(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var r=a(0),i=a.n(r),n=(a(156),a(165)),s=a.n(n),o=a(164),l=a(162),d=a(158);t.default=function(e){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Contact Us",keywords:["Dotmote Labs","sapflow","iot"]}),i.a.createElement(d.a,{style:{height:"100%",position:"relative"}},i.a.createElement(s.a,{style:{width:"100%"},fluid:e.data.contact.childImageSharp.fluid}),i.a.createElement("h1",{style:{color:"white",textShadow:"1px 1px 2px black",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},"Contact Us")),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.0875rem 1.45rem"}},i.a.createElement("p",null,"We'd love to chat. Reach out to us at: [email].")))};var c="3715300334"},156:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(38),l=a.n(o);a.d(t,"a",function(){return l.a});a(157);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,a){var r;e.exports=(r=a(160))&&r.default||r},158:function(e,t,a){"use strict";var r=a(8),i=a.n(r),n=a(0),s=a.n(n),o=a(167),l=Object(o.a)(function(e){var t=e.className,a=e.children,r=e.style;return s.a.createElement("div",{className:t,style:i()({},r)},a)}).withConfig({displayName:"StyledSplashBlock",componentId:"sc-12inpub-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;text-align:center;"]);t.a=l},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Dotmote Labs"}}}}},160:function(e,t,a){"use strict";a.r(t);var r=a(8),i=a.n(r),n=a(0),s=a.n(n),o=a(4),l=a.n(o),d=a(57),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(d.a,i()({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZDY2MDYwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1eiIvPgo8L3N2Zz4="},162:function(e,t,a){"use strict";var r=a(163),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(168),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Dotmote Labs",description:"For all of your plant physiology IOT needs",author:"@dotmotelabs"}}}}},164:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(156),d=a(7),c=a.n(d),u=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return n.a.createElement("header",{style:{position:"absolute",zIndex:10,width:"100vw"}},n.a.createElement("h1",{style:{margin:0,padding:"1.45rem 1.0875rem"}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none",textShadow:"1px 1px 2px black"}},e)))},t}(i.Component);u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var f=u,p=(a(166),a(161)),h=a.n(p),m=a(158),g=function(e){var t=e.children;return n.a.createElement(l.b,{query:"86343720",render:function(e){return n.a.createElement("div",null,n.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement(m.a,{style:{height:"100%",background:"#F6AE2D",padding:"2rem 2rem"}},n.a.createElement("div",null,n.a.createElement("h2",null,n.a.createElement(l.a,{to:"/products",style:{color:"white",textDecoration:"none"}},"Products")),n.a.createElement("h2",null,n.a.createElement(l.a,{to:"/research",style:{color:"white",textDecoration:"none"}},"Research")),n.a.createElement("h2",null,n.a.createElement(l.a,{to:"/about",style:{color:"white",textDecoration:"none"}},"About")),n.a.createElement("h2",null,n.a.createElement(l.a,{to:"/contact-us",style:{color:"white",textDecoration:"none"}},"Contact Us")))),n.a.createElement("footer",{style:{textAlign:"center",paddingTop:"1em",paddingBottom:"1em"}},"© ",(new Date).getFullYear(),", Made with"," ",n.a.createElement("img",{className:"svg-icon",src:h.a,alt:"heart icon"})," in Seattle, San Francisco, and San Diego")))},data:r})};g.propTypes={children:o.a.node.isRequired};t.a=g},165:function(e,t,a){"use strict";var r=a(9);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(39)),o=r(a(79)),l=r(a(80)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,w=e.Tag,S=e.itemProp,I=this.state.imgLoaded||!1===this.state.fadeIn,v=!0===this.state.fadeIn&&!this.state.imgCached,E=(0,l.default)({opacity:I?1:0,transition:v?"opacity 0.5s":"none"},o),L="boolean"==typeof b?"lightgray":b,x={transitionDelay:"0.5s"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},v&&x,o,f),D={title:t,alt:this.state.isVisible?"":a,style:M,className:p};if(h){var R=h;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),L&&d.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&x)}),R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},D)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},D)),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(m){var N=m,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},L&&d.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:L,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},v&&x)}),N.base64&&d.default.createElement(y,(0,l.default)({src:N.base64},D)),N.tracedSVG&&d.default.createElement(y,(0,l.default)({src:N.tracedSVG},D)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(y,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var I=b;t.default=I}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-6d21b6dbda7e84a20d5e.js.map