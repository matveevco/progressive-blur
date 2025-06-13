"use strict";var c=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var B=Object.prototype.hasOwnProperty;var h=(e,t)=>{for(var i in t)c(e,i,{get:t[i],enumerable:!0})},M=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of x(t))!B.call(e,a)&&a!==i&&c(e,a,{get:()=>t[a],enumerable:!(r=v(t,a))||r.enumerable});return e};var y=e=>M(c({},"__esModule",{value:!0}),e);var R={};h(R,{LinearBlur:()=>g,RadialBlur:()=>m});module.exports=y(R);var u=require("react/jsx-runtime"),g=({strength:e=24,tint:t="rgba(255,255,255,0.3)",side:i="bottom",topOffset:r=30,...a})=>{let n=(()=>{switch(i){case"top":return`linear-gradient(to bottom, black 0%, black ${r}%, transparent 100%)`;case"bottom":return`linear-gradient(to bottom, black 0%, black ${r}%, transparent 100%)`;case"left":return`linear-gradient(to right, black 0%, black ${r}%, transparent 100%)`;case"right":return`linear-gradient(to left, black 0%, black ${r}%, transparent 100%)`;default:return`linear-gradient(to bottom, black 0%, black ${r}%, transparent 100%)`}})();return(0,u.jsx)("div",{...a,style:{position:"absolute",inset:0,zIndex:-1,pointerEvents:"none",WebkitBackdropFilter:`blur(${e}px)`,backdropFilter:`blur(${e}px)`,backgroundColor:t,WebkitMaskImage:n,maskImage:n,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"100% 100%",maskSize:"100% 100%",...a.style}})};var b=require("react/jsx-runtime");function m({strength:e=64,steps:t=8,falloffPercentage:i=100,tint:r="transparent",...a}){let l=Math.max(1,t),n=i/l,k=.5,$=Math.pow(e/k,1/(l-1)),o=100-i,d=p=>`blur(${k*$**(l-p-1)}px)`;return(0,b.jsx)("div",{...a,style:{pointerEvents:"none",...a.style},children:(0,b.jsxs)("div",{style:{position:"relative",zIndex:0,width:"100%",height:"100%",background:`radial-gradient(
            closest-side,
            rgb(from ${r} r g b / alpha) 0%,
            rgb(from ${r} r g b / 0%) 100%
          )`},children:[(0,b.jsx)("div",{style:{position:"absolute",zIndex:1,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${o}%,
                  rgba(0, 0, 0, 0) ${o+n}%
                )`,backdropFilter:d(0),WebkitBackdropFilter:d(0)}}),l>1&&(0,b.jsx)("div",{style:{position:"absolute",zIndex:2,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${o}%,
                  rgba(0, 0, 0, 1) ${o+n}%,
                  rgba(0, 0, 0, 0) ${o+n*2}%
                )`,backdropFilter:d(1),WebkitBackdropFilter:d(1)}}),l>2&&Array.from({length:l-2}).map((p,s)=>(0,b.jsx)("div",{style:{position:"absolute",zIndex:s+2,inset:0,mask:`radial-gradient(
                    closest-side,
                    rgba(0, 0, 0, 0) ${o+s*n}%,
                    rgba(0, 0, 0, 1) ${o+(s+1)*n}%,
                    rgba(0, 0, 0, 1) ${o+(s+2)*n}%,
                    rgba(0, 0, 0, 0) ${o+(s+3)*n}%
                  )`,backdropFilter:d(s+2),WebkitBackdropFilter:d(s+2)}},s))]})})}0&&(module.exports={LinearBlur,RadialBlur});
//# sourceMappingURL=index.cjs.map