"use strict";(self.webpackChunkprofolio=self.webpackChunkprofolio||[]).push([[93],{2905:function(e,t,n){n.d(t,{L:function(){return r},v:function(){return i}});var a=n(7294);function r(e){return a.createElement("main",{className:"ProjItemWrapper"},a.createElement("img",{src:e.props.Img,alt:""}),a.createElement("div",{className:"ProjWordsWrapper"},a.createElement("strong",{className:"ProjName"},e.props.Name),a.createElement("p",{className:"ProjInfo"},e.props.Info),a.createElement("div",{className:"ProjLinks"},e.props.Links.map((function(e){return a.createElement("a",{href:Object.values(e)[0],key:Object.keys(e)[0]},Object.keys(e)[0])})))))}function i(e){return a.createElement("main",{className:"ResearchItemWrapper"},a.createElement("img",{src:e.props.Img,alt:""}),a.createElement("div",{className:"ResearchWordsWrapper"},a.createElement("strong",{className:"ResearchName"},e.props.Name),a.createElement("p",{className:"ResearchInfo"},e.props.Info),a.createElement("div",{className:"ResearchLinks"},e.props.Links.map((function(e){return a.createElement("a",{href:Object.values(e)[0],key:Object.keys(e)[0]},Object.keys(e)[0])})))))}},2812:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(5444);function i(e){var t=e.isOpen?"BackDrop open":"BackDrop";return a.createElement("button",{className:t,"aria-label":"backdrop",onClick:function(){e.isOpen&&e.setOpen(!e.isOpen)}})}function c(e){var t=(0,a.useState)(!1),n=t[0],c=t[1],o=n?"SideBar open":"SideBar";return a.createElement("div",null,a.createElement("button",{className:"MenuBtn",onClick:function(){return c(!n)}},a.createElement("img",{src:"/menuicon.png",alt:"MenuBtn"})),a.createElement(i,{isOpen:n,setOpen:c}),a.createElement("nav",{className:o},a.createElement("ul",null,a.createElement(r.rU,{to:"/",onClick:function(){return c(!n)}},e.Dict[0]),a.createElement(r.rU,{to:"/research",onClick:function(){return c(!n)}},e.Dict[1]),a.createElement(r.rU,{to:"/projects",onClick:function(){return c(!n)}},e.Dict[2]),a.createElement("a",{href:"/Wensi_Ai_Resume.pdf",onClick:function(){return c(!n)}},e.Dict[3]))))}var o=["Home","Research","Projects","Resume"];function s(e){var t=o;return a.createElement("header",{className:"NavBarHeader"},a.createElement(c,{Dict:t}),a.createElement("nav",{className:"NavBarWrapper"},a.createElement("div",{className:"Spacer"}),a.createElement("div",{className:"NavItem"},a.createElement("ul",null,a.createElement(r.rU,{to:"/"},t[0]),a.createElement(r.rU,{to:"/research"},t[1]),a.createElement(r.rU,{to:"/projects"},t[2]),a.createElement("a",{href:"/Wensi_Ai_Resume.pdf"},t[3])))))}},6431:function(e,t,n){n.d(t,{b:function(){return a},z:function(){return r}});var a=[{Name:"Catching Fire",Img:"/CatchingFire.jpg",Info:"Virtual Reality Game for School Hazard Education",Links:[{Github:"http://github.com/vince-ai/CatchingFire"},{Paper:"http://github.com/vince-ai/CatchingFire/Files"},{Poster:"/CatchingFire.jpg"}]},{Name:"eXchange",Img:"/eXchange.png",Info:"Textbook, notes, and tutoring sharing platform",Links:[{Github:"https://github.com/CSMT-Westwood/eXchange"},{Website:"https://csmt-westwood.github.io/eXchange/"},{Demo:"https://www.youtube.com/watch?v=6gpFYKKUGSk"}]},{Name:"Catan ML",Img:"/404.png",Info:"Resource Island for Machine Learning",Links:[{Github:"https://github.com/Vince-Ai/CatanML"}]},{Name:"Profolio",Img:"/profolio.png",Info:"Personal Website targeted for templating",Links:[{Github:"https://github.com/Vince-Ai/vince-ai.github.io"},{Website:"https://vince-ai.github.io"}]}],r=[{Name:"GenMotion: Data-driven Motion Generators for Real-time Animation Synthesis",Img:"/genmotion.png",Info:"Yizhou Zhao, Wensi Ai, Liang Qiu, Pan Lu, Feng Shi, Tian Han, Song-Chun Zhu",Links:[{Paper:"https://arxiv.org/abs/2112.06060"},{Github:"http://github.com/yizhouzhao/genmotion"}]},{Name:"Vertical-Horizontal Structured Attention for Generating Music with Chords",Img:"/VH-VAE.png",Info:"Yizhou Zhao, Liang Qiu, Wensi Ai, Feng Shi, Song-Chun Zhu",Links:[{Paper:"https://arxiv.org/abs/2011.09078"},{Github:"https://github.com/yizhouzhao/MusicVAE"}]}]},7529:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(2812),i=n(2905),c=n(6431);function o(){return a.createElement("div",null,a.createElement("title",null,"Research"),a.createElement(r.Z,null),a.createElement("h1",{className:"ResearchTitle"},"Research"),a.createElement("div",{className:"ResearchWrapper"},c.z.map((function(e){return a.createElement(i.v,{className:"ResearchItem",props:e,key:e.Name})}))))}}}]);
//# sourceMappingURL=component---src-pages-research-index-js-a4b0b9e8380bddd692e4.js.map