import{r as c,j as i}from"./index-7m9_wtS-.js";import{u as f}from"./useEventCallback-zqt-gLoP.js";import{u as l}from"./Button-NuOupjTS.js";const p=["onKeyDown"];function m(o,s){if(o==null)return{};var e={},n=Object.keys(o),t,r;for(r=0;r<n.length;r++)t=n[r],!(s.indexOf(t)>=0)&&(e[t]=o[t]);return e}function y(o){return!o||o.trim()==="#"}const u=c.forwardRef((o,s)=>{let{onKeyDown:e}=o,n=m(o,p);const[t]=l(Object.assign({tagName:"a"},n)),r=f(a=>{t.onKeyDown(a),e==null||e(a)});return y(n.href)||n.role==="button"?i.jsx("a",Object.assign({ref:s},n,t,{onKeyDown:r})):i.jsx("a",Object.assign({ref:s},n,{onKeyDown:e}))});u.displayName="Anchor";const d=u;export{d as A};
