(this.webpackJsonptest_proj=this.webpackJsonptest_proj||[]).push([[0],{16:function(e,a,t){},38:function(e,a,t){e.exports=t.p+"static/media/logo.7aa6f4b4.png"},39:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(4),l=t(6),s=t(5),r=t(0),m=t.n(r),i=t(19),o=t.n(i),u=t(13),E=t(14),p=t(37),d=t(18),b=Object(E.c)({simpleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIMPLE_ACTION":return{result:a.payload};case"STARS_PENDING":return Object(d.a)(Object(d.a)({},e),{},{pending:!0});case"STARS_FETCHED":var t=e.stars||[];return t.push(a.payload),Object(d.a)(Object(d.a)({},e),{},{pending:!1,stars:t});default:return e}}});t(48),t(16);var f=t(12),N=t(21),h=t.n(N),v=function(e){return function(a){a({type:"STARS_PENDING"}),h.a.get("https://api.github.com/repos/Aparnasuman/".concat(e,"/stargazers")).then((function(t){console.log(t.data),a({type:"STARS_FETCHED",payload:{repo_id:e,stars:t.data}})}))}},g=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){return Object(n.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStars("Freshup")}},{key:"render",value:function(){return m.a.createElement("div",{className:"about-detail"},m.a.createElement("section",{className:"resume-section ",id:"about"},m.a.createElement("div",{className:"resume-section-content"},m.a.createElement("h1",{className:"mb-0"},"APARNA",m.a.createElement("span",{className:"text-primary"},"Suman")),m.a.createElement("div",{className:"subheading mb-5"},"RIVER VALLY COLONY SITAMARHI BIHAR ,+(91)9304514771 ,",m.a.createElement(f.b,{to:"/Aparnasuman2@gmail.com"},"AparnaSuman2@gmail.com")),m.a.createElement("p",{className:"lead mb-5"},"I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with ReactJS and Angular. I also have experience working with PHP, HTML, CSS and Javascript. Take a look at my work or get in touch!"),m.a.createElement("div",{className:"social-icons "},m.a.createElement("span",{className:"icon-display linkedin"},m.a.createElement("i",{className:"fab fa-linkedin-in"})),m.a.createElement("span",{className:"icon-display github"},m.a.createElement("i",{className:"fab fa-github"})),m.a.createElement("span",{className:"icon-display env"},m.a.createElement("i",{className:"far fa-envelope"})),m.a.createElement("span",{className:"icon-display fb"},m.a.createElement("i",{className:"fab fa-facebook-f"}))))))}}]),t}(m.a.Component),O=Object(u.b)(null,{fetchStars:v})(g),j=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"about-detail"},m.a.createElement("section",{className:"resume-section",id:"experience"},m.a.createElement("div",{className:"resume-section-content"},m.a.createElement("h2",{className:"mb-5"},"Experience"),m.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5"},m.a.createElement("div",{className:"flex-grow-1"},m.a.createElement("h3",{className:"mb-0"},"ASSOCIATE SOFTWARE TRAINEE"),m.a.createElement("div",{className:"subheading mb-3 com"},"INFINITY LABS"),m.a.createElement("p",null,"Working with AngularJs,ReactJS and other tools to make beautiful,elegant and responsive website")),m.a.createElement("div",{className:"flex-shrink-0"},m.a.createElement("span",{className:"text-primary"},"Jan 2020-PRESENT"))),m.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5"},m.a.createElement("div",{className:"flex-grow-1"},m.a.createElement("h3",{className:"mb-0"},"WEB DEVELOPMENT INTERN"),m.a.createElement("div",{className:"subheading mb-3 com"},"Omninons Solution"),m.a.createElement("p",null,"Worked with ReactJs and Php for making sophisticated website with all its features independentaly")),m.a.createElement("div",{className:"flex-shrink-0"},m.a.createElement("span",{className:"text-primary"},"Jan 2019-July 2019"))))))}}]),t}(m.a.Component),y=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"about-detail  education "},m.a.createElement("section",{className:"resume-section",id:"education"},m.a.createElement("div",{className:"resume-section-content"},m.a.createElement("h2",{className:"mb-5"},"Education"),m.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5"},m.a.createElement("div",{className:"flex-grow-1"},m.a.createElement("h3",{className:"mb-0"},"Guru Nanak Dev Engineering Collage"),m.a.createElement("div",{className:"subheading mb-3"},"BACHALOR OF COMPUTER SCIENCE"),m.a.createElement("div",null,"Computer Science - Web Development "),m.a.createElement("p",null,"CGPA: 7.91")),m.a.createElement("div",{className:"flex-shrink-0"},m.a.createElement("span",{className:"text-primary"},"August 2016 - May 2019"))),m.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between"},m.a.createElement("div",{className:"flex-grow-1"},m.a.createElement("h3",{className:"mb-0"},"Sant LongoWal Institute of Engineering & Technology"),m.a.createElement("div",{className:"subheading mb-3"},"DIPLOMA IN COMPUTER Application"),m.a.createElement("div",null,"Computer Science - Computer Application "),m.a.createElement("p",null,"PERCENTAGE: 81%/100%")),m.a.createElement("div",{className:"flex-shrink-0"},m.a.createElement("span",{className:"text-primary"},"August 20012 - May 20016"))),m.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between"},m.a.createElement("div",{className:"flex-grow-1"},m.a.createElement("h3",{className:"mb-0"},"JESUS AND MARRY ACADEMY"),m.a.createElement("div",{className:"subheading mb-3"},"TENTH "),m.a.createElement("div",null,"  Major- Physics Chemistry Math"),m.a.createElement("p",null,"CGPA: 9.0")),m.a.createElement("div",{className:"flex-shrink-0"},m.a.createElement("span",{className:"text-primary"},"August 20011 - May 20012"))))))}}]),t}(m.a.Component),w=function(e){return m.a.createElement("div",{className:"about-detail "},m.a.createElement("section",{className:"resume-section",id:"skills"},m.a.createElement("div",{className:"resume-section-content"},m.a.createElement("h2",{className:"mb-5"},"Skills"),m.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),m.a.createElement("ul",{className:"list-inline dev-icons"},m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-angular"})),m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-html5"})),m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-css3"})),m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-js-square"})),m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-bootstrap"})),m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-react"})),m.a.createElement("span",{className:"icon-disp "},m.a.createElement("i",{className:"fab fa-npm"}))))))},x=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:" about-detail intrest"},m.a.createElement("section",{className:"resume-section",id:"interests"},m.a.createElement("div",{className:"resume-section-content"},m.a.createElement("h2",{className:"mb-5"},"Interests"),m.a.createElement("p",null,"Apart from being a web developer, I enjoy most of the time to deeloped new idea in front end animation with refrence from google"),m.a.createElement("p",{className:"mb-0"},"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."))))}}]),t}(m.a.Component),A=Object(u.b)((function(e){return e}))(x),k=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={rep:[]},e.checkstar=function(a){e.props.fetchStars(a)},e.getStars=function(a){var t,n=e.props.simpleReducer.stars.find((function(e){return e.repo_id===a}));return console.log(n),null===n||void 0===n||null===(t=n.stars)||void 0===t?void 0:t.length},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.github.com/users/Aparnasuman/repos").then((function(a){var t=a.data;console.log(t),e.setState({rep:t})}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:" about-detail "},m.a.createElement("section",{className:"resume-section",id:"education"},m.a.createElement("div",{className:"resume-section-content"},m.a.createElement("h2",{className:"mb-5"},"PROJECT"),m.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5"},m.a.createElement("div",{className:"flex-grow-1"},m.a.createElement("h3",{className:"mb-0"},m.a.createElement("ul",null,this.state.rep.map((function(a){return m.a.createElement("li",{className:"new",key:a.id},a.name," ",m.a.createElement("button",{className:"button-primary new-button",onClick:function(){return e.checkstar(a.name)}},"\u2606"),m.a.createElement("span",null," check stars: ",e.getStars(a.name)),m.a.createElement("p",{className:"subheadings mb-3"}," ",a.description))})))))))))}}]),t}(m.a.Component),S=Object(u.b)((function(e){return e}),{fetchStars:v})(k),C=t(2),I=t(38),T=t.n(I),R=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"container about"},m.a.createElement("nav",{className:"navbar"},m.a.createElement("img",{src:T.a,alt:"Download",className:"download"}),m.a.createElement("ul",{className:"list"},m.a.createElement(f.b,{to:"/about"},m.a.createElement("li",{className:"listabout"},"ABOUT")),m.a.createElement(f.b,{to:"/experience"},m.a.createElement("li",{className:"listabout"},"EXPERIENCE")),m.a.createElement(f.b,{to:"/education"}," ",m.a.createElement("li",{className:"listabout"},"EDUCATION")),m.a.createElement(f.b,{to:"/skills"},"  ",m.a.createElement("li",{className:"listabout"},"SKILLS")),m.a.createElement(f.b,{to:"/project"}," ",m.a.createElement("li",{className:"listabout"},"PROJECT")),m.a.createElement(f.b,{to:"/intrest"}," ",m.a.createElement("li",{className:"listabout"},"INTREST")))))}}]),t}(m.a.Component),P=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),m.a.createElement("div",{className:"container-fluid "},m.a.createElement(R,null),m.a.createElement(O,null),m.a.createElement(j,null),m.a.createElement(y,null),m.a.createElement(w,null),m.a.createElement(S,null),m.a.createElement(A,null))}}]),t}(m.a.Component),M=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(f.a,null,m.a.createElement(R,null),m.a.createElement(C.c,null,m.a.createElement(C.a,{path:"/about",component:O}),m.a.createElement(C.a,{path:"/experience",component:j}),m.a.createElement(C.a,{path:"/education",component:y}),m.a.createElement(C.a,{path:"/skills",component:w}),m.a.createElement(C.a,{path:"/Intrest",component:A}),m.a.createElement(C.a,{path:"/project",component:S}),m.a.createElement(C.a,{path:"/",component:P})))}}]),t}(m.a.Component),D=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=Object(E.d)(b,Object(E.a)(p.a));return m.a.createElement(u.a,{store:e},m.a.createElement("div",{className:"container-fluid"},m.a.createElement(M,null)))}}]),t}(m.a.Component);o.a.render(m.a.createElement(D,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.04820a43.chunk.js.map