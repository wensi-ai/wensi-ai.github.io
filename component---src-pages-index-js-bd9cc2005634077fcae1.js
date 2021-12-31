"use strict";(self.webpackChunkprofolio=self.webpackChunkprofolio||[]).push([[678],{2812:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),r=t(5444);function c(e){var n=e.isOpen?"BackDrop open":"BackDrop";return a.createElement("button",{className:n,"aria-label":"backdrop",onClick:function(){e.isOpen&&e.setOpen(!e.isOpen)}})}function i(e){var n=(0,a.useState)(!1),t=n[0],i=n[1],l=t?"SideBar open":"SideBar";return a.createElement("div",null,a.createElement("button",{className:"MenuBtn",onClick:function(){return i(!t)}},a.createElement("img",{src:"/menuicon.png",alt:"MenuBtn"})),a.createElement(c,{isOpen:t,setOpen:i}),a.createElement("nav",{className:l},a.createElement("ul",null,a.createElement(r.rU,{to:"/",onClick:function(){return i(!t)}},e.Dict[0]),a.createElement(r.rU,{to:"/research",onClick:function(){return i(!t)}},e.Dict[1]),a.createElement(r.rU,{to:"/projects",onClick:function(){return i(!t)}},e.Dict[2]),a.createElement("a",{href:"/Wensi_Ai_Resume.pdf",onClick:function(){return i(!t)}},e.Dict[3]))))}var l=["Home","Publications","Projects","Resume"];function o(e){var n=l;return a.createElement("header",{className:"NavBarHeader"},a.createElement(i,{Dict:n}),a.createElement("nav",{className:"NavBarWrapper"},a.createElement("div",{className:"Spacer"}),a.createElement("div",{className:"NavItem"},a.createElement("ul",null,a.createElement(r.rU,{to:"/"},n[0]),a.createElement(r.rU,{to:"/research"},n[1]),a.createElement(r.rU,{to:"/projects"},n[2]),a.createElement("a",{href:"/Wensi_Ai_Resume.pdf"},n[3])))))}},4667:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(7294),r=t(2812),c=["Python","PyTorch","Sklearn","Apach Airflow","Javascript","React.JS","C/C++","Linux","Git"],i=[{date:"Dec. 2021",content:"GenMotion introduces its first major release 0.0.4. It now includes more generation models, direct Python rendering support, and better formatted tutorial notebooks."},{date:"Jun. 2021",content:"Joining Metabit Trading as a SWE this summer. Will be working on optimizing daily data generation workflow using Apach Airflow"},{date:"Mar. 2021",content:"Our machine learning model for NEXT Truck employees selection reaches 97.8% accuracy in Kaggle prediction contest!"}],l=[{name:"Linkedin",url:"https://www.linkedin.com/in/vince-ai",img:"/linkedin.png"},{name:"Github",url:"https://github.com/Vince-Ai",img:"/github.png"},{name:"Instagram",url:"https://www.instagram.com/vince.ai.817",img:"/instagram.png"}];function o(e){return a.createElement("div",{className:"Intro"},a.createElement("img",{src:"/intro.png",alt:"IntroPng"}),a.createElement("h1",null,"Hi, I'm ","Wensi Ai"),a.createElement("div",null,"CS & Applied Math @ UCLA"))}function m(e){return a.createElement("div",{className:"News"},a.createElement("h1",{className:"NewsHeader"},"News"),a.createElement("ul",null,i.map((function(e){return a.createElement("li",{className:"NewsItem",key:e.content},a.createElement("strong",null,e.date),a.createElement("div",null,e.content))}))))}function s(){return a.createElement("div",{className:"About"},a.createElement("h1",null,"About me"),a.createElement("div",{className:"AboutParagraph"},"\n    I am Wensi (Vince), a 3rd year undergraduate CS & Applied Math student at UCLA. \n    I am currently working as a research assistant at the Center for Vision, Cognition, Learning, and Autonomy (VCLA).\n    My primary research interests includes Embodied-AI, Multi-agent System, Cognitive Robotics, and Reinforcement Learning. \n    Besides academics, I also love to do all kinds of outdoor activities, including running, hiking, cycling, etc. \n    I can also play the violin!\n"),a.createElement("h2",null,"Here are some of my tech stack:"),a.createElement("div",{className:"TechStack"},c.map((function(e){return a.createElement("p",null,e)}))))}function u(e){return a.createElement("div",{className:"Footer"},a.createElement("p",null,"Copyright Wensi Ai @ 2022"),a.createElement("strong",null,"va0817@ucla.edu"),a.createElement("strong",null,"+14244027280"),a.createElement("div",{className:"ContactImg"},l.map((function(e){return a.createElement("a",{href:e.url},a.createElement("img",{src:e.img,alt:e.name}))}))))}function d(e){return a.createElement("div",{className:"indexWrapper"},a.createElement("title",null,"Vince Ai"),a.createElement(r.Z,null),a.createElement(o,null),a.createElement(s,null),a.createElement(m,null),a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bd9cc2005634077fcae1.js.map