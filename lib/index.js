import{jsx as u}from"react/jsx-runtime";var g=({strength:s=24,tint:d="rgba(255,255,255,0.3)",side:l="bottom",topOffset:r=30,...o})=>{let t=(()=>{switch(l){case"top":return`linear-gradient(to bottom, black 0%, black ${r}%, transparent 100%)`;case"bottom":return`linear-gradient(to bottom, black 0%, black ${r}%, transparent 100%)`;case"left":return`linear-gradient(to right, black 0%, black ${r}%, transparent 100%)`;case"right":return`linear-gradient(to left, black 0%, black ${r}%, transparent 100%)`;default:return`linear-gradient(to bottom, black 0%, black ${r}%, transparent 100%)`}})();return u("div",{...o,style:{position:"absolute",inset:0,zIndex:-1,pointerEvents:"none",WebkitBackdropFilter:`blur(${s}px)`,backdropFilter:`blur(${s}px)`,backgroundColor:d,WebkitMaskImage:t,maskImage:t,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"100% 100%",maskSize:"100% 100%",...o.style}})};import{jsx as b,jsxs as $}from"react/jsx-runtime";function m({strength:s=64,steps:d=8,falloffPercentage:l=100,tint:r="transparent",...o}){let n=Math.max(1,d),t=l/n,c=.5,p=Math.pow(s/c,1/(n-1)),e=100-l,i=k=>`blur(${c*p**(n-k-1)}px)`;return b("div",{...o,style:{pointerEvents:"none",...o.style},children:$("div",{style:{position:"relative",zIndex:0,width:"100%",height:"100%",background:`radial-gradient(
            closest-side,
            rgb(from ${r} r g b / alpha) 0%,
            rgb(from ${r} r g b / 0%) 100%
          )`},children:[b("div",{style:{position:"absolute",zIndex:1,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${e}%,
                  rgba(0, 0, 0, 0) ${e+t}%
                )`,backdropFilter:i(0),WebkitBackdropFilter:i(0)}}),n>1&&b("div",{style:{position:"absolute",zIndex:2,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${e}%,
                  rgba(0, 0, 0, 1) ${e+t}%,
                  rgba(0, 0, 0, 0) ${e+t*2}%
                )`,backdropFilter:i(1),WebkitBackdropFilter:i(1)}}),n>2&&Array.from({length:n-2}).map((k,a)=>b("div",{style:{position:"absolute",zIndex:a+2,inset:0,mask:`radial-gradient(
                    closest-side,
                    rgba(0, 0, 0, 0) ${e+a*t}%,
                    rgba(0, 0, 0, 1) ${e+(a+1)*t}%,
                    rgba(0, 0, 0, 1) ${e+(a+2)*t}%,
                    rgba(0, 0, 0, 0) ${e+(a+3)*t}%
                  )`,backdropFilter:i(a+2),WebkitBackdropFilter:i(a+2)}},a))]})})}export{g as LinearBlur,m as RadialBlur};
//# sourceMappingURL=index.js.map