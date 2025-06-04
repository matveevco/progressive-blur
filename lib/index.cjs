"use strict";var c=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var B=(t,e)=>{for(var a in e)c(t,a,{get:e[a],enumerable:!0})},h=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of v(e))!x.call(t,r)&&r!==a&&c(t,r,{get:()=>e[r],enumerable:!(l=$(e,r))||l.enumerable});return t};var y=t=>h(c({},"__esModule",{value:!0}),t);var R={};B(R,{LinearBlur:()=>m,RadialBlur:()=>u});module.exports=y(R);var k=require("react/jsx-runtime"),m=({strength:t=24,tint:e="rgba(255,255,255,0.3)",side:a="bottom",falloffStart:l=50,falloffEnd:r=100,...i})=>{let p=`linear-gradient(${{top:"to bottom",bottom:"to top",left:"to right",right:"to left"}[a]}, transparent ${l}%, black ${r}%)`;return(0,k.jsx)("div",{...i,style:{position:"absolute",inset:0,zIndex:-1,pointerEvents:"none",WebkitBackdropFilter:`blur(${t}px)`,backdropFilter:`blur(${t}px)`,WebkitMaskImage:p,maskImage:p,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"100% 100%",maskSize:"100% 100%",...i.style}})};var b=require("react/jsx-runtime");function u({strength:t=64,steps:e=8,falloffPercentage:a=100,tint:l="transparent",...r}){let i=Math.max(1,e),n=a/i,p=.5,f=Math.pow(t/p,1/(i-1)),o=100-a,d=g=>`blur(${p*f**(i-g-1)}px)`;return(0,b.jsx)("div",{...r,style:{pointerEvents:"none",...r.style},children:(0,b.jsxs)("div",{style:{position:"relative",zIndex:0,width:"100%",height:"100%",background:`radial-gradient(
            closest-side,
            rgb(from ${l} r g b / alpha) 0%,
            rgb(from ${l} r g b / 0%) 100%
          )`},children:[(0,b.jsx)("div",{style:{position:"absolute",zIndex:1,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${o}%,
                  rgba(0, 0, 0, 0) ${o+n}%
                )`,backdropFilter:d(0),WebkitBackdropFilter:d(0)}}),i>1&&(0,b.jsx)("div",{style:{position:"absolute",zIndex:2,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${o}%,
                  rgba(0, 0, 0, 1) ${o+n}%,
                  rgba(0, 0, 0, 0) ${o+n*2}%
                )`,backdropFilter:d(1),WebkitBackdropFilter:d(1)}}),i>2&&Array.from({length:i-2}).map((g,s)=>(0,b.jsx)("div",{style:{position:"absolute",zIndex:s+2,inset:0,mask:`radial-gradient(
                    closest-side,
                    rgba(0, 0, 0, 0) ${o+s*n}%,
                    rgba(0, 0, 0, 1) ${o+(s+1)*n}%,
                    rgba(0, 0, 0, 1) ${o+(s+2)*n}%,
                    rgba(0, 0, 0, 0) ${o+(s+3)*n}%
                  )`,backdropFilter:d(s+2),WebkitBackdropFilter:d(s+2)}},s))]})})}0&&(module.exports={LinearBlur,RadialBlur});
//# sourceMappingURL=index.cjs.map