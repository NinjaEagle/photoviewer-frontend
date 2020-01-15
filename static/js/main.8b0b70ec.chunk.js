(this.webpackJsonphi=this.webpackJsonphi||[]).push([[0],{134:function(e,t,a){e.exports=a(276)},139:function(e,t,a){},140:function(e,t,a){},255:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(31),r=a.n(l),c=(a(139),a(23)),o=a(24),s=a(28),u=a(25),m=a(29),g=(a(140),a(78)),h=a(291),p=a(283),d=a(286),v=a(284),E=a(285),f=a(288),b=a(287),j=a(289),y=a(79),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.image.url,t=e.split("/")[5],a=e.split("/")[6],n="/images/"+this.props.image.id+"/",l=e.concat("?grayscale");return i.a.createElement("div",null,i.a.createElement(b.a,{color:"blue"},this.props.grayScaleToggle?i.a.createElement("a",{href:n},i.a.createElement(j.a,{src:l,height:!0})):i.a.createElement("a",{href:n},i.a.createElement(j.a,{src:e,height:!0})),i.a.createElement(b.a.Content,null,i.a.createElement(b.a.Header,null,i.a.createElement("a",{href:n},this.props.image.title)),i.a.createElement(b.a.Meta,null),i.a.createElement(b.a.Description,null," Image ",this.props.image.id," ",i.a.createElement("br",null),t," by ",a)),i.a.createElement(b.a.Content,{extra:!0},i.a.createElement("a",{href:"Image"},i.a.createElement(y.a,{name:"like"})))))}}]),t}(n.Component),k=a(122),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={dimension:""},a.handleChange=function(e){console.log(e.target),a.setState(Object(k.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),i.a.createElement("div",null,i.a.createElement("h3",null,"Filter By:"),i.a.createElement("div",{className:"twelve wide field"},i.a.createElement("select",{onChange:function(t){return e.props.setFilterTerm(t.target.value)},value:this.state.dimension,name:"dimension",className:"ui fluid dropdown"},i.a.createElement("option",{value:""},"Select Dimension"),i.a.createElement("option",{value:""},"No Filter"),i.a.createElement("option",{value:"300/200"},"300 x 200"),i.a.createElement("option",{value:"100/100"},"100 x 100"),i.a.createElement("option",{value:"250/250"},"250 x 250"),i.a.createElement("option",{value:"400/200"},"400 x 200"),i.a.createElement("option",{value:"300/300"},"300 x 300"))))}}]),t}(n.Component),S=(a(255),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0,imageIndex:[],allImgs:[],activePage:1,dimension:"",grayScaleToggle:!1},a.initialState=function(e){a.setState({loading:!1,imageIndex:e,activePage:e.page})},a.setFilterTerm=function(e){a.setState({dimension:e})},a.toggleSwitch=function(e){e.preventDefault(),a.setState({grayScaleToggle:!a.state.grayScaleToggle})},a.handlePage=function(e,t){var n={activePage:t.activePage}.activePage.toString();console.log(n),a.setState({loading:!0}),fetch("https://photoviewer-backend.herokuapp.com/images/?page="+n).then((function(e){return e.json()})).then(a.initialState)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://photoviewer-backend.herokuapp.com/get_All_Pictures").then((function(e){return e.json()})).then((function(t){return e.setState({allImgs:t.images})})),fetch("https://photoviewer-backend.herokuapp.com/images").then((function(e){return e.json()})).then(this.initialState)}},{key:"filterPictures",value:function(){var e=this,t=Object(g.a)(this.state.allImgs);return(""===this.state.dimension?Object(g.a)(this.state.imageIndex.images):t.filter((function(t){return t.url.includes(e.state.dimension)}))).map((function(t){return i.a.createElement(h.a.Column,null,i.a.createElement(O,{grayScaleToggle:e.state.grayScaleToggle,key:t.id,image:t}))}))}},{key:"render",value:function(){return console.log(this.state),this.state.loading?i.a.createElement(p.a,null,i.a.createElement(d.a,{active:!0,inverted:!0},i.a.createElement(v.a,null,"Loading Images..."))):i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement(E.a,{hidden:!0}),i.a.createElement(p.a,{textAlign:"center"},i.a.createElement("h1",null,"Photo Viewer App"),i.a.createElement("div",{className:"top-part"},i.a.createElement(w,{setFilterTerm:this.setFilterTerm}),i.a.createElement("div",{class:"ui toggle checkbox",onClick:this.toggleSwitch},i.a.createElement("input",{type:"checkbox",name:"public"}),i.a.createElement("label",null,"Toggle Grayscale"))),i.a.createElement(E.a,{hidden:!0}),i.a.createElement(f.a,{onPageChange:this.handlePage,size:"mini",siblingRange:"4",defaultActivePage:this.state.imageIndex.page,totalPages:this.state.imageIndex.pages})),i.a.createElement(E.a,{hidden:!0}),i.a.createElement(h.a,{relaxed:!0,columns:5},this.filterPictures())))}}]),t}(n.Component)),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[134,1,2]]]);
//# sourceMappingURL=main.8b0b70ec.chunk.js.map