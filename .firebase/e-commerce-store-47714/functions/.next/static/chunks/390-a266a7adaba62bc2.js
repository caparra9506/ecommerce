(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{5209:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return L}});var r=t(5893),i=t(7294),n=t(1163),a=t(3370),c=t(9668),l=t(5409),d=t(7257),o=t(5150),u=t(6846),p=t(6486),h=t(8040),x=t(6377),_=t.n(x);function j(e){let{games:s}=e,{changeQuantityItem:t,deleteItem:i}=(0,l.j)(),n=Array.from({length:50},(e,s)=>{let t=s+1;return{key:t,text:String(t),value:t}});return(0,r.jsxs)("div",{className:_().basket,children:[(0,r.jsx)("h2",{children:"Cesta"}),(0,r.jsx)("div",{className:_().block,children:(0,p.map)(s,e=>(0,r.jsxs)("div",{className:_().product,children:[(0,r.jsx)(d.Z,{src:e.attributes.cover}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:_().info,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:e.attributes.title}),(0,r.jsx)("p",{children:e.attributes.platform.data.attributes.title})]}),(0,r.jsx)(o.Z,{name:"trash alternate online",link:!0,onClick:()=>i(e.id)})]}),(0,r.jsxs)("div",{className:_().quantity,children:[(0,r.jsx)(u.Z,{className:"number",options:n,selection:!0,value:e.quantity,compact:!0,onChange:(s,r)=>t(e.id,r.value)}),(0,r.jsxs)("span",{children:[h.fn.calcDiscountedPrice(e.attributes.price,e.attributes.discount),"€"]})]})]})]},e.id))})]})}var m=t(967),f=t(1664),b=t.n(f),v=t(648),k=t.n(v);function y(e){let{games:s}=e,t=(0,n.useRouter)(),[a,c]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e={original:0,discount:0,price:0};(0,p.forEach)(s,s=>{let t=h.fn.calcDiscountedPrice(s.attributes.price,s.attributes.discount);e={original:e.original+s.attributes.price*s.quantity,discount:e.discount+(s.attributes.price-t)*s.quantity,price:e.price+t*s.quantity}}),c(e)},[s]);let l=()=>{t.replace({query:{...t.query,step:2}})};return a?(0,r.jsxs)("div",{className:k().resume,children:[(0,r.jsx)("h2",{children:"Resumen"}),(0,r.jsxs)("div",{className:k().block,children:[(0,r.jsxs)("div",{className:k().prices,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Precio oficial"}),(0,r.jsxs)("span",{children:[a.original.toFixed(2),"€"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Descuento"}),(0,r.jsxs)("span",{children:[a.discount.toFixed(2),"€"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Subtotal"}),(0,r.jsxs)("span",{children:[a.price.toFixed(2),"€"]})]})]}),(0,r.jsx)(m.Z,{primary:!0,fluid:!0,onClick:l,children:"Proceder con el pago"}),(0,r.jsx)(b(),{href:"/",children:"Continuar comprando"})]})]}):null}var g=t(7675),S=t.n(g),N=t(1291),T=t(6664),q=t(1861),w=t(3967),R=t.n(w),E=t(5904),C=t.n(E);let O=new a.kL;function P(e){let{addressSelected:s,setAddressSelected:t}=e,[n,a]=(0,i.useState)(null),{user:c}=(0,l.a)();return(0,i.useEffect)(()=>{(async()=>{try{let e=await O.getAll(c.id);a(e.data)}catch(e){console.error(e)}})()},[]),(0,r.jsxs)("div",{className:C().addresses,children:[(0,r.jsx)("h2",{children:"Direcci\xf3n"}),(0,p.map)(n,e=>(0,r.jsxs)("div",{onClick:()=>t(e),className:R()(C().address,{[C().active]:e.id===(null==s?void 0:s.id)}),children:[(0,r.jsxs)("p",{children:[e.attributes.name," (",e.attributes.title,")"]}),(0,r.jsxs)("p",{children:[e.attributes.address,", ",e.attributes.postal_code,","," ",e.attributes.state,", ",e.attributes.city]})]},e.id))]})}var A=t(4460),Z=t.n(A);function D(){return(0,r.jsxs)("div",{className:Z().payment,children:[(0,r.jsx)("h2",{children:"M\xe9todos de pago"}),(0,r.jsx)("div",{className:Z().block,children:(0,r.jsx)(T.CardElement,{options:{style:{base:{color:"#fff",fontSize:"16px","::placeholder":{color:"#909090"}}}}})})]})}var F=t(7507),B=t.n(F);let z=new a.AP;function V(e){let{games:s,addressSelected:t}=e,[a,c]=(0,i.useState)(null),[d,o]=(0,i.useState)(!1),u=(0,T.useStripe)(),x=(0,T.useElements)(),{user:_}=(0,l.a)(),{deleteAllItems:j}=(0,l.j)(),f=(0,n.useRouter)();(0,i.useEffect)(()=>{let e=0;(0,p.forEach)(s,s=>{let t=h.fn.calcDiscountedPrice(s.attributes.price,s.attributes.discount);e+=t*s.quantity}),c(e.toFixed(2))},[s]);let b=async()=>{if(o(!0),!u||!x){o(!1);return}let e=x.getElement(T.CardElement),r=await u.createToken(e);if(r.error)console.error(r.error.message);else{let e=await z.paymentCart(r.token,s,_.id,t);200===e.status?(j(),v()):console.error("Error al realizar el pedido")}setTimeout(()=>{o(!1)},1e3)},v=()=>{f.replace({query:{...f.query,step:3}})};return a?(0,r.jsxs)("div",{className:B().resume,children:[(0,r.jsx)("h2",{children:"Resumen"}),(0,r.jsx)("div",{className:B().block,children:(0,r.jsx)("div",{className:B().products,children:(0,p.map)(s,e=>(0,r.jsxs)("div",{className:B().product,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:e.attributes.title}),(0,r.jsx)("span",{children:e.attributes.platform.data.attributes.title})]}),(0,r.jsxs)("span",{children:[e.quantity>0&&"".concat(e.quantity,"x"),h.fn.calcDiscountedPrice(e.attributes.price,e.attributes.discount),"€"]})]},e.id))})}),(0,r.jsxs)("div",{className:B().blockTotal,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Total"}),(0,r.jsxs)("span",{children:[a,"€"]})]}),(0,r.jsx)(m.Z,{primary:!0,fluid:!0,disabled:!t,onClick:b,loading:d,children:"Pagar"})]})]}):null}var M=t(1642),G=t.n(M);let H=(0,N.J)(h.V.STRIPE_TOKEN);var J=t(1594),Q=t.n(J);let W={StepOne:function(e){let{games:s}=e;return(0,r.jsxs)("div",{className:S().stepOne,children:[(0,r.jsx)("div",{className:S().center,children:(0,r.jsx)(j,{games:s})}),(0,r.jsx)("div",{className:S().right,children:(0,r.jsx)(y,{games:s})})]})},StepTwo:function(e){let{games:s}=e,[t,n]=(0,i.useState)(null);return(0,r.jsx)(T.Elements,{stripe:H,children:(0,r.jsxs)("div",{className:G().stepTwo,children:[(0,r.jsxs)("div",{className:G().center,children:[(0,r.jsx)(P,{addressSelected:t,setAddressSelected:n}),(0,r.jsx)(q.Z0,{height:50}),t&&(0,r.jsx)(D,{})]}),(0,r.jsx)("div",{className:G().right,children:(0,r.jsx)(V,{games:s,addressSelected:t})})]})})},StepThree:function(){return(0,r.jsxs)("div",{className:Q().stepThree,children:[(0,r.jsx)(o.Z,{name:"check circle outline"}),(0,r.jsx)("h2",{children:"\xa1Compra exitosa!"}),(0,r.jsx)(m.Z,{as:b(),href:"/account",primary:!0,children:"Ver pedido"})]})}},I=new a.lA;function L(){let{query:{step:e=1}}=(0,n.useRouter)(),s=Number(e),[t,a]=(0,i.useState)(null),{cart:d}=(0,l.j)();return(0,i.useEffect)(()=>{(async()=>{try{let e=[];for await(let s of d){let t=await I.getGameById(s.id);e.push({...t.data,quantity:s.quantity})}a(e)}catch(e){console.error(e)}})()},[d]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q.pQ,{title:"Carrito"}),(0,r.jsxs)(c.Yf,{children:[1===s&&(0,r.jsx)(W.StepOne,{games:t}),2===s&&(0,r.jsx)(W.StepTwo,{games:t}),3===s&&(0,r.jsx)(W.StepThree,{})]})]})}},6377:function(e){e.exports={basket:"Basket_basket__p_c_z",block:"Basket_block__lWMfW",product:"Basket_product__xZcgz",info:"Basket_info__ijp7a",quantity:"Basket_quantity__yb_0l"}},648:function(e){e.exports={resume:"Resume_resume__dkAo1",block:"Resume_block__iRUsF",prices:"Resume_prices__GaX5q"}},7675:function(e){e.exports={stepOne:"StepOne_stepOne__0VJef",center:"StepOne_center__pcRDG",right:"StepOne_right__nwz02"}},1594:function(e){e.exports={stepThree:"StepThree_stepThree__SRm_q"}},5904:function(e){e.exports={addresses:"Addresses_addresses__g_aHS",address:"Addresses_address__MOj06",active:"Addresses_active__2Sx5q"}},4460:function(e){e.exports={payment:"Payment_payment__zp1FT",block:"Payment_block__FOegM"}},7507:function(e){e.exports={resume:"Resume_resume__h1_HW",block:"Resume_block__TCwcQ",blockTotal:"Resume_blockTotal__5VOH6",products:"Resume_products__2uXrd",product:"Resume_product__SE335"}},1642:function(e){e.exports={stepTwo:"StepTwo_stepTwo__TRBJq",center:"StepTwo_center__VQD9Y",right:"StepTwo_right__cwLas"}}}]);