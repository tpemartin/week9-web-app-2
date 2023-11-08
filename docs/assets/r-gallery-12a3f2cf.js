import{u as Ge,d as Ue,a as Xe,b as ee,_ as ne,R as J,r as S,j as e,e as h,g as We,f as qe,s as ie,h as be,i as Ye,k as Je,l as te,m as Ke,S as Q,T as le,B as je,c as Qe}from"./Stack-4972b386.js";import{_ as Ze,T as Re,u as Ce,g as Se,h as Fe,j as et,k as tt,A as nt,d as it,a as ot,F as at,b as st,R as rt,c as xe,e as ge,r as Te,i as we,f as lt,P as ct}from"./GitHub-c3601839.js";const ut={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},dt=ut;function Me(){const n=Ge(Ue);return n[Xe]||n}const ve={disabled:!1};var pt=function(t){return t.scrollTop},K="unmounted",k="exited",D="entering",G="entered",ce="exiting",A=function(n){Ze(t,n);function t(r,o){var i;i=n.call(this,r,o)||this;var a=o,l=a&&!a.isMounting?r.enter:r.appear,d;return i.appearStatus=null,r.in?l?(d=k,i.appearStatus=D):d=G:r.unmountOnExit||r.mountOnEnter?d=K:d=k,i.state={status:d},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===K?{status:k}:null};var s=t.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==D&&a!==G&&(i=D):(a===D||a===G)&&(i=ce)}this.updateStatus(!1,i)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var o=this.props.timeout,i,a,l;return i=a=l=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,l=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:l}},s.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===D){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ee.findDOMNode(this);a&&pt(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===k&&this.setState({status:K})},s.performEnter=function(o){var i=this,a=this.props.enter,l=this.context?this.context.isMounting:o,d=this.props.nodeRef?[l]:[ee.findDOMNode(this),l],m=d[0],E=d[1],f=this.getTimeouts(),T=l?f.appear:f.enter;if(!o&&!a||ve.disabled){this.safeSetState({status:G},function(){i.props.onEntered(m)});return}this.props.onEnter(m,E),this.safeSetState({status:D},function(){i.props.onEntering(m,E),i.onTransitionEnd(T,function(){i.safeSetState({status:G},function(){i.props.onEntered(m,E)})})})},s.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:ee.findDOMNode(this);if(!i||ve.disabled){this.safeSetState({status:k},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:ce},function(){o.props.onExiting(l),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:k},function(){o.props.onExited(l)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},s.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,i.nextCallback=null,o(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},s.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:ee.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],m=d[0],E=d[1];this.props.addEndListener(m,E)}o!=null&&setTimeout(this.nextCallback,o)},s.render=function(){var o=this.state.status;if(o===K)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=ne(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return J.createElement(Re.Provider,{value:null},typeof a=="function"?a(o,l):J.cloneElement(J.Children.only(a),l))},t}(J.Component);A.contextType=Re;A.propTypes={};function B(){}A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:B,onEntering:B,onEntered:B,onExit:B,onExiting:B,onExited:B};A.UNMOUNTED=K;A.EXITED=k;A.ENTERING=D;A.ENTERED=G;A.EXITING=ce;const ft=A,ht=n=>n.scrollTop;function Ee(n,t){var s,r;const{timeout:o,easing:i,style:a={}}=n;return{duration:(s=a.transitionDuration)!=null?s:typeof o=="number"?o:o[t.mode]||0,easing:(r=a.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}const mt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],xt={entering:{opacity:1},entered:{opacity:1}},gt=S.forwardRef(function(t,s){const r=Me(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:l,easing:d,in:m,onEnter:E,onEntered:f,onEntering:T,onExit:j,onExited:U,onExiting:L,style:F,timeout:N=o,TransitionComponent:$=ft}=t,x=ne(t,mt),v=S.useRef(null),X=Ce(v,l.ref,s),y=c=>g=>{if(c){const b=v.current;g===void 0?c(b):c(b,g)}},H=y(T),O=y((c,g)=>{ht(c);const b=Ee({style:F,timeout:N,easing:d},{mode:"enter"});c.style.webkitTransition=r.transitions.create("opacity",b),c.style.transition=r.transitions.create("opacity",b),E&&E(c,g)}),W=y(f),I=y(L),w=y(c=>{const g=Ee({style:F,timeout:N,easing:d},{mode:"exit"});c.style.webkitTransition=r.transitions.create("opacity",g),c.style.transition=r.transitions.create("opacity",g),j&&j(c)}),oe=y(U),R=c=>{i&&i(v.current,c)};return e.jsx($,h({appear:a,in:m,nodeRef:v,onEnter:O,onEntered:W,onEntering:H,onExit:w,onExited:oe,onExiting:I,addEndListener:R,timeout:N},x,{children:(c,g)=>S.cloneElement(l,h({style:h({opacity:0,visibility:c==="exited"&&!m?"hidden":void 0},xt[c],F,l.props.style),ref:X},g))}))}),vt=gt,Et=Se(e.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),yt=Se(e.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function bt(n){return qe("MuiRating",n)}const jt=We("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),Y=jt,Rt=["value"],Ct=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function St(n,t,s){return n<t?t:n>s?s:n}function Ft(n){const t=n.toString().split(".")[1];return t?t.length:0}function re(n,t){if(n==null)return n;const s=Math.round(n/t)*t;return Number(s.toFixed(Ft(t)))}const Tt=n=>{const{classes:t,size:s,readOnly:r,disabled:o,emptyValueFocused:i,focusVisible:a}=n,l={root:["root",`size${be(s)}`,o&&"disabled",a&&"focusVisible",r&&"readOnly"],label:["label","pristine"],labelEmptyValue:[i&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ke(l,bt,t)},wt=ie("span",{name:"MuiRating",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:s}=n;return[{[`& .${Y.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${be(s.size)}`],s.readOnly&&t.readOnly]}})(({theme:n,ownerState:t})=>h({display:"inline-flex",position:"relative",fontSize:n.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${Y.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Y.focusVisible} .${Y.iconActive}`]:{outline:"1px solid #999"},[`& .${Y.visuallyHidden}`]:dt},t.size==="small"&&{fontSize:n.typography.pxToRem(18)},t.size==="large"&&{fontSize:n.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"})),Ae=ie("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:n},t)=>[t.label,n.emptyValueFocused&&t.labelEmptyValueActive]})(({ownerState:n})=>h({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Mt=ie("span",{name:"MuiRating",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:s}=n;return[t.icon,s.iconEmpty&&t.iconEmpty,s.iconFilled&&t.iconFilled,s.iconHover&&t.iconHover,s.iconFocus&&t.iconFocus,s.iconActive&&t.iconActive]}})(({theme:n,ownerState:t})=>h({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(n.vars||n).palette.action.disabled})),At=ie("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:n=>Ye(n)&&n!=="iconActive",overridesResolver:(n,t)=>{const{iconActive:s}=n;return[t.decimal,s&&t.iconActive]}})(({iconActive:n})=>h({position:"relative"},n&&{transform:"scale(1.2)"}));function Lt(n){const t=ne(n,Rt);return e.jsx("span",h({},t))}function ye(n){const{classes:t,disabled:s,emptyIcon:r,focus:o,getLabelText:i,highlightSelectedOnly:a,hover:l,icon:d,IconContainerComponent:m,isActive:E,itemValue:f,labelProps:T,name:j,onBlur:U,onChange:L,onClick:F,onFocus:N,readOnly:$,ownerState:x,ratingValue:v,ratingValueRounded:X}=n,y=a?f===v:f<=v,H=f<=l,O=f<=o,W=f===X,I=Fe(),w=e.jsx(Mt,{as:m,value:f,className:te(t.icon,y?t.iconFilled:t.iconEmpty,H&&t.iconHover,O&&t.iconFocus,E&&t.iconActive),ownerState:h({},x,{iconEmpty:!y,iconFilled:y,iconHover:H,iconFocus:O,iconActive:E}),children:r&&!y?r:d});return $?e.jsx("span",h({},T,{children:w})):e.jsxs(S.Fragment,{children:[e.jsxs(Ae,h({ownerState:h({},x,{emptyValueFocused:void 0}),htmlFor:I},T,{children:[w,e.jsx("span",{className:t.visuallyHidden,children:i(f)})]})),e.jsx("input",{className:t.visuallyHidden,onFocus:N,onBlur:U,onChange:L,onClick:F,disabled:s,value:f,id:I,type:"radio",name:j,checked:W})]})}const Nt=e.jsx(Et,{fontSize:"inherit"}),Ot=e.jsx(yt,{fontSize:"inherit"});function Vt(n){return`${n} Star${n!==1?"s":""}`}const It=S.forwardRef(function(t,s){const r=Je({name:"MuiRating",props:t}),{className:o,defaultValue:i=null,disabled:a=!1,emptyIcon:l=Ot,emptyLabelText:d="Empty",getLabelText:m=Vt,highlightSelectedOnly:E=!1,icon:f=Nt,IconContainerComponent:T=Lt,max:j=5,name:U,onChange:L,onChangeActive:F,onMouseLeave:N,onMouseMove:$,precision:x=1,readOnly:v=!1,size:X="medium",value:y}=r,H=ne(r,Ct),O=Fe(U),[W,I]=et({controlled:y,default:i,name:"Rating"}),w=re(W,x),oe=Me(),[{hover:R,focus:c},g]=S.useState({hover:-1,focus:-1});let b=w;R!==-1&&(b=R),c!==-1&&(b=c);const{isFocusVisibleRef:pe,onBlur:Oe,onFocus:Ve,ref:Ie}=tt(),[_e,ae]=S.useState(!1),fe=S.useRef(),ke=Ce(Ie,fe,s),De=u=>{$&&$(u);const p=fe.current,{right:C,left:Z}=p.getBoundingClientRect(),{width:P}=p.firstChild.getBoundingClientRect();let z;oe.direction==="rtl"?z=(C-u.clientX)/(P*j):z=(u.clientX-Z)/(P*j);let M=re(j*z+x/2,x);M=St(M,x,j),g(_=>_.hover===M&&_.focus===M?_:{hover:M,focus:M}),ae(!1),F&&R!==M&&F(u,M)},$e=u=>{N&&N(u);const p=-1;g({hover:p,focus:p}),F&&R!==p&&F(u,p)},he=u=>{let p=u.target.value===""?null:parseFloat(u.target.value);R!==-1&&(p=R),I(p),L&&L(u,p)},He=u=>{u.clientX===0&&u.clientY===0||(g({hover:-1,focus:-1}),I(null),L&&parseFloat(u.target.value)===w&&L(u,null))},Pe=u=>{Ve(u),pe.current===!0&&ae(!0);const p=parseFloat(u.target.value);g(C=>({hover:C.hover,focus:p}))},ze=u=>{if(R!==-1)return;Oe(u),pe.current===!1&&ae(!1);const p=-1;g(C=>({hover:C.hover,focus:p}))},[Be,me]=S.useState(!1),q=h({},r,{defaultValue:i,disabled:a,emptyIcon:l,emptyLabelText:d,emptyValueFocused:Be,focusVisible:_e,getLabelText:m,icon:f,IconContainerComponent:T,max:j,precision:x,readOnly:v,size:X}),V=Tt(q);return e.jsxs(wt,h({ref:ke,onMouseMove:De,onMouseLeave:$e,className:te(V.root,o,v&&"MuiRating-readOnly"),ownerState:q,role:v?"img":null,"aria-label":v?m(b):null},H,{children:[Array.from(new Array(j)).map((u,p)=>{const C=p+1,Z={classes:V,disabled:a,emptyIcon:l,focus:c,getLabelText:m,highlightSelectedOnly:E,hover:R,icon:f,IconContainerComponent:T,name:O,onBlur:ze,onChange:he,onClick:He,onFocus:Pe,ratingValue:b,ratingValueRounded:w,readOnly:v,ownerState:q},P=C===Math.ceil(b)&&(R!==-1||c!==-1);if(x<1){const z=Array.from(new Array(1/x));return e.jsx(At,{className:te(V.decimal,P&&V.iconActive),ownerState:q,iconActive:P,children:z.map((M,_)=>{const se=re(C-1+(_+1)*x,x);return e.jsx(ye,h({},Z,{isActive:!1,itemValue:se,labelProps:{style:z.length-1===_?{}:{width:se===b?`${(_+1)*x*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),se)})},C)}return e.jsx(ye,h({},Z,{isActive:P,itemValue:C}),C)}),!v&&!a&&e.jsxs(Ae,{className:te(V.label,V.labelEmptyValue),ownerState:q,children:[e.jsx("input",{className:V.visuallyHidden,value:"",id:`${O}-empty`,type:"radio",name:O,checked:w==null,onFocus:()=>me(!0),onBlur:()=>me(!1),onChange:he}),e.jsx("span",{className:V.visuallyHidden,children:d})]})]}))}),_t=It;function kt(){return e.jsx(e.Fragment,{children:e.jsxs(Q,{direction:"row",spacing:2,sx:{justifyContent:"space-between",alignItems:"center"},children:[e.jsx(Dt,{}),e.jsx($t,{}),e.jsx(Ht,{})]})})}function Dt({groupNumber:n=1}){return e.jsx(e.Fragment,{children:e.jsx(nt,{sx:{bgcolor:it[500]},children:n})})}function $t({title:n="Title",subtitle:t="Subtitle"}){return e.jsx(e.Fragment,{children:e.jsxs(Q,{direction:"column",spacing:2,children:[e.jsx(le,{variant:"h5",children:n}),e.jsx(le,{variant:"subtitle1",children:t})]})})}function Ht(){return e.jsx(e.Fragment,{children:e.jsx(ot,{})})}function Pt(){return e.jsx(e.Fragment,{children:e.jsxs(Q,{direction:"column",spacing:2,sx:{alignItems:"center"},children:[e.jsx(zt,{}),e.jsx(Bt,{})]})})}function zt(){return e.jsx(e.Fragment,{children:e.jsxs(at,{children:[e.jsx(st,{sx:{margin:"auto"},id:"demo-row-radio-buttons-group-label",children:"Language"}),e.jsxs(rt,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[e.jsx(xe,{value:"ch",control:e.jsx(ge,{}),label:"中"}),e.jsx(xe,{value:"en",control:e.jsx(ge,{}),label:"En"})]})]})})}function Bt(){return e.jsx(e.Fragment,{children:e.jsx("iframe",{src:"https://player.vimeo.com/video/877867752?h=15bd33812f",width:"100%",height:200,frameBorder:0,allow:"autoplay; fullscreen",allowFullScreen:!0})})}function Gt(){return e.jsx(e.Fragment,{children:e.jsx(je,{sx:{overflow:"hidden",height:"300px",overflowY:"scroll"},children:e.jsx(le,{variant:"body1",children:"Sequels are never as good as the original. And when the original was terrible, there is even more reason to dread the next episode. So it is with “Tariff Man Part Two”. In the White House, Donald Trump put more new tariffs on American imports than any president in nearly a century. His philosophy was simple: “I am a Tariff Man. When people or countries come in to raid the great wealth of our Nation, I want them to pay for the privilege of doing so.” Mr Trump’s protectionism made America poorer, did little to help exporters and fed the inflation still raging. If he wins the Republican presidential nomination (a likely outcome) and goes on to win the election (too close to call), he has vowed to ramp up things. He is mulling an across-the-board levy of perhaps 10% on all products entering America. In one fell swoop, his plans would more than triple the average American tariff. The direct costs would be bad enough, with the tariffs functioning as a tax on consumers and hurting most producers. Yet they would also tear at America’s ties with its allies and threaten to wreck the global trade system."})})})}var ue={},Ut=we;Object.defineProperty(ue,"__esModule",{value:!0});var Le=ue.default=void 0,Xt=Ut(Te()),Wt=e,qt=(0,Xt.default)((0,Wt.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Grade");Le=ue.default=qt;var de={},Yt=we;Object.defineProperty(de,"__esModule",{value:!0});var Ne=de.default=void 0,Jt=Yt(Te()),Kt=e,Qt=(0,Jt.default)((0,Kt.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");Ne=de.default=Qt;function Zt(){const[n,t]=S.useState(!1),s=()=>{t(r=>!r)};return e.jsx(e.Fragment,{children:e.jsxs(Q,{direction:"row",spacing:2,sx:{justifyContent:"space-between"},children:[e.jsx(lt,{}),e.jsx(en,{ratingOpen:n}),e.jsx(tn,{ratingOpen:n,onClick:s})]})})}function en({ratingOpen:n=!1}){const[t,s]=S.useState(null);return e.jsx(e.Fragment,{children:e.jsx(je,{children:e.jsx(vt,{in:n,timeout:300,children:e.jsx(_t,{name:"project-rating",value:t,max:5,onChange:(r,o)=>{console.log(r),console.log(o),s(o)}})})})})}function tn({ratingOpen:n=!1,onClick:t}){const s=n?e.jsx(Ne,{onClick:t}):e.jsx(Le,{onClick:t});return e.jsx(e.Fragment,{children:s})}function nn(){return e.jsx(e.Fragment,{children:e.jsx(ct,{elevation:3,sx:{width:"360px",p:3},children:e.jsxs(Q,{direction:"column",spacing:2,children:[e.jsx(kt,{}),e.jsx(Pt,{}),e.jsx(Gt,{}),e.jsx(Zt,{})]})})})}function on(){return e.jsx(e.Fragment,{children:e.jsx(nn,{})})}Qe.createRoot(document.getElementById("root")).render(e.jsx(J.StrictMode,{children:e.jsx(on,{})}));