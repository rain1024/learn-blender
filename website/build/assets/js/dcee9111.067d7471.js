"use strict";(self.webpackChunklearn_blender=self.webpackChunklearn_blender||[]).push([["8478"],{37849:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>p,default:()=>x,assets:()=>h,toc:()=>m,frontMatter:()=>d});var i=JSON.parse('{"id":"components-example/magic-path","title":"Magic Path Component","description":"Work In Progress","source":"@site/docs/components-example/magic-path.mdx","sourceDirName":"components-example","slug":"/components-example/magic-path","permalink":"/learn-blender/website/build/docs/components-example/magic-path","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}'),o=n("85893"),r=n("50065");n("67294");let s=(e,t)=>({x:e,y:t}),l=e=>{let{label:t,position:n}=e;return(0,o.jsxs)("g",{transform:`translate(${20+230*n.x}, ${20+90*n.y})`,children:[(0,o.jsx)("rect",{width:200,height:60,rx:"10",ry:"10",fill:"#ef4444",stroke:"#f8fafc",strokeWidth:"2"}),(0,o.jsx)("text",{x:100,y:30,textAnchor:"middle",alignmentBaseline:"middle",fontSize:"14",fill:"#fef2f2",fontWeight:"bold",children:t})]})},a=(e,t)=>({start:e,end:t}),c=()=>{let e=[{id:"A",label:"Simple Piano",position:s(0,0)},{id:"B",label:"Basic Notes",position:s(0,1)},{id:"C",label:"Basic Chords",position:s(0,3)},{id:"C1",label:"C Chord",position:s(1,2)},{id:"C2",label:"D Chord",position:s(1,3)}],t=[a("A","B"),a("B","C")],n=t=>e.find(e=>e.id===t),i=t.map((e,t)=>{let i=n(e.start),r=n(e.end);return(0,o.jsx)("line",{x1:20+230*i.position.x+100,y1:20+90*i.position.y+30,x2:20+230*r.position.x+100,y2:20+90*r.position.y+30,stroke:"#737373",strokeWidth:"2"},t)});return(0,o.jsx)("div",{style:{fontSize:"24px",color:"blue",textAlign:"center",marginTop:"20px"},children:(0,o.jsx)("div",{style:{position:"relative",height:"3000px",width:"3000px",overflow:"auto",border:"1px solid #ddd",background:"white"},className:"bg-red-500",children:(0,o.jsxs)("svg",{style:{width:"3000px",height:"3000px"},children:[i,e.map((e,t)=>(0,o.jsx)(l,{label:e.label,position:e.position},t))]})})})},d={},p="Magic Path Component",h={},m=[{value:"Simple use",id:"simple-use",level:2}];function u(e){let t={em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"magic-path-component",children:"Magic Path Component"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Work In Progress"})}),"\n",(0,o.jsx)(t.h2,{id:"simple-use",children:"Simple use"}),"\n",(0,o.jsx)(c,{})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var i=n(67294);let o={},r=i.createContext(o);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);