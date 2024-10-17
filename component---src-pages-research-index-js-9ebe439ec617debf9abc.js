"use strict";(self.webpackChunkprofolio=self.webpackChunkprofolio||[]).push([[93],{2905:function(e,n,t){t.d(n,{L:function(){return i},v:function(){return r}});var a=t(7294);function i(e){return a.createElement("main",{className:"ProjItemWrapper"},a.createElement("img",{src:e.props.Img,alt:""}),a.createElement("div",{className:"ProjWordsWrapper"},a.createElement("strong",{className:"ProjName"},e.props.Name),a.createElement("p",{className:"ProjInfo"},e.props.Info),a.createElement("div",{className:"ProjLinks"},e.props.Links.map((function(e){return a.createElement("a",{href:Object.values(e)[0],key:Object.keys(e)[0]},Object.keys(e)[0])})))))}function r(e){return a.createElement("main",{className:"ResearchItemWrapper"},a.createElement("img",{src:e.props.Img,alt:""}),a.createElement("div",{className:"ResearchWordsWrapper"},a.createElement("strong",{className:"ResearchName"},e.props.Name),a.createElement("p",{className:"ResearchAuthors"},e.props.Authors),a.createElement("p",{className:"ResearchInfo"},e.props.Info),a.createElement("div",{className:"ResearchLinks"},e.props.Links.map((function(e){return a.createElement("a",{href:Object.values(e)[0],key:Object.keys(e)[0]},Object.keys(e)[0])})))))}},2812:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),i=t(5444);function r(e){var n=e.isOpen?"BackDrop open":"BackDrop";return a.createElement("button",{className:n,"aria-label":"backdrop",onClick:function(){e.isOpen&&e.setOpen(!e.isOpen)}})}function o(e){var n=(0,a.useState)(!1),t=n[0],o=n[1],s=t?"SideBar open":"SideBar";return a.createElement("div",null,a.createElement("button",{className:"MenuBtn",onClick:function(){return o(!t)}},a.createElement("img",{src:"/menuicon.png",alt:"MenuBtn"})),a.createElement(r,{isOpen:t,setOpen:o}),a.createElement("nav",{className:s},a.createElement("ul",null,a.createElement(i.rU,{to:"/",onClick:function(){return o(!t)}},e.Dict[0]),a.createElement(i.rU,{to:"/research",onClick:function(){return o(!t)}},e.Dict[1]),a.createElement(i.rU,{to:"/projects",onClick:function(){return o(!t)}},e.Dict[2]),a.createElement("a",{href:"/Wensi_Ai_CV.pdf",onClick:function(){return o(!t)}},e.Dict[3]))))}var s=["Home","Research","Projects","CV"];function c(e){var n=s;return a.createElement("header",{className:"NavBarHeader"},a.createElement(o,{Dict:n}),a.createElement("nav",{className:"NavBarWrapper"},a.createElement("div",{className:"Spacer"}),a.createElement("div",{className:"NavItem"},a.createElement("ul",null,a.createElement(i.rU,{to:"/"},n[0]),a.createElement(i.rU,{to:"/research"},n[1]),a.createElement(i.rU,{to:"/projects"},n[2]),a.createElement("a",{href:"/Wensi_Ai_CV.pdf"},n[3])))))}},6431:function(e,n,t){t.d(n,{z:function(){return a},b:function(){return i}});var a=[{Name:"BEHAVIOR Vision Suite: Customizable Dataset Generation via Simulation",Img:"/bvs.png",Authors:"Yunhao Ge*, Yihe Tang*, Jiashu Xu*, Cem Gokmen*, Chengshu Li, Wensi Ai, Benjamin Jose Martinez, Arman Aydin, Mona Anvari, Ayush K Chakravarthy, Hong-Xing Yu, Josiah Wong, Sanjana Srivastava, Sharon Lee, Shengxin Zha, Laurent Itti, Yunzhu Li, Roberto Martín-Martín, Miao Liu, Pengchuan Zhang, Ruohan Zhang, Li Fei-Fei, Jiajun Wu",Info:"CVPR 2024",Links:[{Paper:"https://arxiv.org/abs/2405.09546"},{Website:"https://behavior-vision-suite.github.io/"}]},{Name:"TeleMoMa: A Modular and Versatile Teleoperation System for Mobile Manipulation",Img:"/telemoma.png",Authors:"Shivin Dass, Wensi Ai, Yuqian Jiang, Samik Singh, Jiaheng Hu, Ruohan Zhang, Peter Stone, Ben Abbatematteo, Roberto Martín-Martín",Info:"RSS 2024 DGR Workshop",Links:[{Paper:"https://arxiv.org/abs/2403.07869"},{Website:"https://robin-lab.cs.utexas.edu/telemoma-web/"}]},{Name:"NOIR: Neural Signal Operated Intelligent Robots for Everyday Activities",Img:"/NOIR.png",Authors:"Ruohan Zhang*, Sharon Lee*, Minjune Hwang*, Ayano Hiranaka*, Chen Wang, Wensi Ai, Jin Jie Ryan Tan, Shreya Gupta, Yilun Hao, Gabrael Levine, Ruohan Gao, Anthony Norcia, Li Fei-Fei, Jiajun Wu",Info:"CoRL 2023",Links:[{Paper:"https://arxiv.org/abs/2311.01454"},{Website:"https://noir-corl.github.io/"}]},{Name:"ARNOLD: A Benchmark for Language-Grounded Task Learning with Continuous States in Realistic Scenes",Img:"/ARNOLD.png",Authors:"Ran Gong*, Jiangyong Huang*, Yizhou Zhao, Haoran Geng, Xiaofeng Gao, Qingyang Wu, Wensi Ai, Ziheng Zhou, Demetri Terzopoulos, Song-Chun Zhu, Baoxiong Jia, Siyuan Huang",Info:"ICCV 2023",Links:[{Paper:"https://arxiv.org/abs/2304.04321"},{Website:"https://arnold-benchmark.github.io"}]},{Name:"Quantifying the Effect of Visual Impairments on Daily Activities in Virtual, Interactive Environments",Img:"/vivr.png",Authors:"Wensi Ai, Sharon Lee, Li Fei-Fei, Jiajun Wu, Ruohan Zhang",Info:"CogSci 2023",Links:[{Paper:"https://escholarship.org/uc/item/2sj3r0n2"},{Website:"https://sites.google.com/view/vi-vr"}]},{Name:"BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation",Img:"/b1k.png",Authors:"Chengshu Li*, Ruohan Zhang*, Josiah Wong*, Cem Gokmen*, Sanjana Srivastava*, Roberto Martín-Martín*, Chen Wang*, Gabrael Levine*, Wensi Ai*, et. al.",Info:"CoRL 2022",Links:[{Paper:"https://arxiv.org/abs/2403.09227"},{Website:"https://behavior.stanford.edu/"}]}],i=[{Name:"Simulately",Img:"/simulately.png",Info:"Resources for physics simulators in robot learning research",Links:[{Github:"https://github.com/geng-haoran/Simulately"},{Website:"https://simulately.wiki/"}]},{Name:"OmniGibson",Img:"/OmniGibson.png",Info:"Embodied AI simulator for Behavior Benchmark",Links:[{Github:"https://github.com/StanfordVL/OmniGibson"},{Website:"https://behavior.stanford.edu/"}]},{Name:"VRKitchen2.0-IndoorKit",Img:"/IndoorKit.png",Info:"Augmented indoor scene building in Omniverse",Links:[{Github:"https://github.com/yizhouzhao/VRKitchen2.0-IndoorKit"},{Website:"https://vrkitchen20-tutorial.readthedocs.io/en/latest/"},{Paper:"https://arxiv.org/abs/2206.11887"}]},{Name:"Googolplex",Img:"/googolplex.png",Info:"User-friendly AI text generator with GCP",Links:[{Github:"https://github.com/Dadaism6/UCLA-CS130-Googolplex"},{Website:"https://chendaduan.com/projects/googolplex_project"}]},{Name:"eXchange",Img:"/eXchange.png",Info:"Textbook, notes, and tutoring sharing platform",Links:[{Demo:"https://www.youtube.com/watch?v=6gpFYKKUGSk"},{Github:"https://github.com/CSMT-Westwood/eXchange"},{Website:"https://csmt-westwood.github.io/eXchange/"}]},{Name:"Catching Fire",Img:"/CatchingFire.jpg",Info:"Virtual Reality game for school hazard education",Links:[{Github:"http://github.com/wensi-ai/CatchingFire"},{Paper:"https://github.com/wensi-ai/CatchingFire/tree/master/Files/Paper.pdf"},{Poster:"/CatchingFire.jpg"}]}]},7529:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(7294),i=t(2812),r=t(2905),o=t(6431);function s(){return a.createElement("div",null,a.createElement("title",null,"Research"),a.createElement(i.Z,null),a.createElement("h1",{className:"ResearchTitle"},"Research"),a.createElement("div",{className:"ResearchWrapper"},o.z.map((function(e){return a.createElement(r.v,{className:"ResearchItem",props:e,key:e.Name})}))))}}}]);
//# sourceMappingURL=component---src-pages-research-index-js-9ebe439ec617debf9abc.js.map