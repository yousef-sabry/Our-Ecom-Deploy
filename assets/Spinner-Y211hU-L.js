import{r,j as l,c as d,u as f}from"./index-7m9_wtS-.js";import{P as $}from"./index-HPGscYs6.js";import{C as Y}from"./Row-4Vo06hVD.js";function Z(e,o){return r.Children.toArray(e).some(a=>r.isValidElement(a)&&a.type===o)}const z={type:$.string,tooltip:$.bool,as:$.elementType},k=r.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:s=!1,...t},n)=>l.jsx(e,{...t,ref:n,className:d(o,`${a}-${s?"tooltip":"feedback"}`)}));k.displayName="Feedback";k.propTypes=z;const I=k,P=r.createContext({}),F=P,T=r.forwardRef(({id:e,bsPrefix:o,className:a,type:s="checkbox",isValid:t=!1,isInvalid:n=!1,as:c="input",...i},p)=>{const{controlId:m}=r.useContext(F);return o=f(o,"form-check-input"),l.jsx(c,{...i,ref:p,type:s,id:e||m,className:d(a,o,t&&"is-valid",n&&"is-invalid")})});T.displayName="FormCheckInput";const S=T,b=r.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...s},t)=>{const{controlId:n}=r.useContext(F);return e=f(e,"form-check-label"),l.jsx("label",{...s,ref:t,htmlFor:a||n,className:d(o,e)})});b.displayName="FormCheckLabel";const x=b,O=r.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:s=!1,reverse:t=!1,disabled:n=!1,isValid:c=!1,isInvalid:i=!1,feedbackTooltip:p=!1,feedback:m,feedbackType:u,className:h,style:C,title:N="",type:j="checkbox",label:g,children:w,as:K="input",...Q},U)=>{o=f(o,"form-check"),a=f(a,"form-switch");const{controlId:R}=r.useContext(F),W=r.useMemo(()=>({controlId:e||R}),[R,e]),L=!w&&g!=null&&g!==!1||Z(w,x),X=l.jsx(S,{...Q,type:j==="switch"?"checkbox":j,ref:U,isValid:c,isInvalid:i,disabled:n,as:K});return l.jsx(F.Provider,{value:W,children:l.jsx("div",{style:C,className:d(h,L&&o,s&&`${o}-inline`,t&&`${o}-reverse`,j==="switch"&&a),children:w||l.jsxs(l.Fragment,{children:[X,L&&l.jsx(x,{title:N,children:g}),m&&l.jsx(I,{type:u,tooltip:p,children:m})]})})})});O.displayName="FormCheck";const y=Object.assign(O,{Input:S,Label:x}),G=r.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:s,id:t,className:n,isValid:c=!1,isInvalid:i=!1,plaintext:p,readOnly:m,as:u="input",...h},C)=>{const{controlId:N}=r.useContext(F);return e=f(e,"form-control"),l.jsx(u,{...h,type:o,size:s,ref:C,readOnly:m,id:t||N,className:d(n,p?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,c&&"is-valid",i&&"is-invalid")})});G.displayName="FormControl";const ee=Object.assign(G,{Feedback:I}),E=r.forwardRef(({className:e,bsPrefix:o,as:a="div",...s},t)=>(o=f(o,"form-floating"),l.jsx(a,{ref:t,className:d(e,o),...s})));E.displayName="FormFloating";const oe=E,M=r.forwardRef(({controlId:e,as:o="div",...a},s)=>{const t=r.useMemo(()=>({controlId:e}),[e]);return l.jsx(F.Provider,{value:t,children:l.jsx(o,{...a,ref:s})})});M.displayName="FormGroup";const V=M,A=r.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:s=!1,className:t,htmlFor:n,...c},i)=>{const{controlId:p}=r.useContext(F);o=f(o,"form-label");let m="col-form-label";typeof a=="string"&&(m=`${m} ${m}-${a}`);const u=d(t,o,s&&"visually-hidden",a&&m);return n=n||p,a?l.jsx(Y,{ref:i,as:"label",className:u,htmlFor:n,...c}):l.jsx(e,{ref:i,className:u,htmlFor:n,...c})});A.displayName="FormLabel";const ae=A,B=r.forwardRef(({bsPrefix:e,className:o,id:a,...s},t)=>{const{controlId:n}=r.useContext(F);return e=f(e,"form-range"),l.jsx("input",{...s,type:"range",ref:t,className:d(o,e),id:a||n})});B.displayName="FormRange";const se=B,_=r.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:s,isValid:t=!1,isInvalid:n=!1,id:c,...i},p)=>{const{controlId:m}=r.useContext(F);return e=f(e,"form-select"),l.jsx("select",{...i,size:a,ref:p,className:d(s,e,o&&`${e}-${o}`,t&&"is-valid",n&&"is-invalid"),id:c||m})});_.displayName="FormSelect";const te=_,q=r.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:s,...t},n)=>(e=f(e,"form-text"),l.jsx(a,{...t,ref:n,className:d(o,e,s&&"text-muted")})));q.displayName="FormText";const re=q,D=r.forwardRef((e,o)=>l.jsx(y,{...e,ref:o,type:"switch"}));D.displayName="Switch";const ne=Object.assign(D,{Input:y.Input,Label:y.Label}),H=r.forwardRef(({bsPrefix:e,className:o,children:a,controlId:s,label:t,...n},c)=>(e=f(e,"form-floating"),l.jsxs(V,{ref:c,className:d(o,e),controlId:s,...n,children:[a,l.jsx("label",{htmlFor:s,children:t})]})));H.displayName="FloatingLabel";const le=H,ce={_ref:$.any,validated:$.bool,as:$.elementType},v=r.forwardRef(({className:e,validated:o,as:a="form",...s},t)=>l.jsx(a,{...s,ref:t,className:d(e,o&&"was-validated")}));v.displayName="Form";v.propTypes=ce;const pe=Object.assign(v,{Group:V,Control:ee,Floating:oe,Check:y,Switch:ne,Label:ae,Text:re,Range:se,Select:te,FloatingLabel:le}),J=r.forwardRef(({bsPrefix:e,variant:o,animation:a="border",size:s,as:t="div",className:n,...c},i)=>{e=f(e,"spinner");const p=`${e}-${a}`;return l.jsx(t,{ref:i,...c,className:d(n,p,s&&`${p}-${s}`,o&&`text-${o}`)})});J.displayName="Spinner";const fe=J;export{pe as F,fe as S};
