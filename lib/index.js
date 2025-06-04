import{jsx as k}from"react/jsx-runtime";var m=({strength:n=24,tint:p="rgba(255,255,255,0.3)",side:s="bottom",falloffStart:l=50,falloffEnd:b=100,...t})=>{let o=`linear-gradient(${{top:"to bottom",bottom:"to top",left:"to right",right:"to left"}[s]}, transparent ${l}%, black ${b}%)`;return k("div",{...t,style:{position:"absolute",inset:0,zIndex:-1,pointerEvents:"none",WebkitBackdropFilter:`blur(${n}px)`,backdropFilter:`blur(${n}px)`,WebkitMaskImage:o,maskImage:o,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"100% 100%",maskSize:"100% 100%",...t.style}})};import{jsx as d,jsxs as f}from"react/jsx-runtime";function u({strength:n=64,steps:p=8,falloffPercentage:s=100,tint:l="transparent",...b}){let t=Math.max(1,p),r=s/t,o=.5,g=Math.pow(n/o,1/(t-1)),e=100-s,i=c=>`blur(${o*g**(t-c-1)}px)`;return d("div",{...b,style:{pointerEvents:"none",...b.style},children:f("div",{style:{position:"relative",zIndex:0,width:"100%",height:"100%",background:`radial-gradient(
            closest-side,
            rgb(from ${l} r g b / alpha) 0%,
            rgb(from ${l} r g b / 0%) 100%
          )`},children:[d("div",{style:{position:"absolute",zIndex:1,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${e}%,
                  rgba(0, 0, 0, 0) ${e+r}%
                )`,backdropFilter:i(0),WebkitBackdropFilter:i(0)}}),t>1&&d("div",{style:{position:"absolute",zIndex:2,inset:0,mask:`radial-gradient(
                  closest-side,
                  rgba(0, 0, 0, 1) ${e}%,
                  rgba(0, 0, 0, 1) ${e+r}%,
                  rgba(0, 0, 0, 0) ${e+r*2}%
                )`,backdropFilter:i(1),WebkitBackdropFilter:i(1)}}),t>2&&Array.from({length:t-2}).map((c,a)=>d("div",{style:{position:"absolute",zIndex:a+2,inset:0,mask:`radial-gradient(
                    closest-side,
                    rgba(0, 0, 0, 0) ${e+a*r}%,
                    rgba(0, 0, 0, 1) ${e+(a+1)*r}%,
                    rgba(0, 0, 0, 1) ${e+(a+2)*r}%,
                    rgba(0, 0, 0, 0) ${e+(a+3)*r}%
                  )`,backdropFilter:i(a+2),WebkitBackdropFilter:i(a+2)}},a))]})})}export{m as LinearBlur,u as RadialBlur};
//# sourceMappingURL=index.js.map