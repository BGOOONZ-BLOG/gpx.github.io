(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});var n=a(0),r=a.n(n),i=a(149),o=a(147),u=a(152),c=o.a.div.withConfig({displayName:"pages__Title",componentId:"ifild7-0"})(["font-size:1.5em;font-weight:600;"]);t.default=function(e){var t=e.data;return r.a.createElement(u.a,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(i.a,{key:t.id,to:t.fields.slug,style:{color:"inherit"}},r.a.createElement(c,null,t.frontmatter.title),t.frontmatter.date," · ",t.timeToRead," min read")}))};var d="3417545534"},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(32),c=a.n(u);a.d(t,"a",function(){return c.a});a(148);var d=r.a.createContext({}),l=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Giorgio Polvara's Blog"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(54),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147),o=a(150),u=a(149),c=i.a.h1.withConfig({displayName:"header__Title",componentId:"w0084c-0"})(["font-weight:500;font-size:1.2rem;text-align:center;padding:2em 0;margin:2em 0;border-bottom:1px solid #00000033;color:#333;"]),d=function(e){e.children;return r.a.createElement(u.b,{query:"3892401927",render:function(e){return r.a.createElement(u.a,{to:"/"},r.a.createElement(c,null,e.site.siteMetadata.title))},data:o})},l=i.a.div.withConfig({displayName:"layout__Container",componentId:"sc-4dh0yk-0"})(["max-width:65ch;margin:auto;"]);t.a=function(e){var t=e.children;return r.a.createElement(l,null,r.a.createElement(d,null),t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-ae9ac4b9de308c110ea9.js.map