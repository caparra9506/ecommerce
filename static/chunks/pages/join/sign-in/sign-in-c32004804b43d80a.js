(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{6640:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/join/sign-in/sign-in",function(){return r(5122)}])},5750:function(e,n,r){"use strict";r.d(n,{U:function(){return p},B:function(){return d}});var a=r(5893),i=r(5496),s=r(6443),t=r(1163),o=r(3370),u=r(6310);let l=new o.gx;function d(){let e=(0,t.useRouter)(),n=(0,s.TA)({initialValues:{email:"",username:"",name:"",password:""},validationSchema:u.Ry({email:u.Z_().email(!0).required(!0),username:u.Z_().required(!0),name:u.Z_().required(!0),password:u.Z_().required(!0)}),validateOnChange:!1,onSubmit:async n=>{try{await l.register(n),e.push("/join/sign-in")}catch(e){console.error(e)}}});return(0,a.jsxs)(i.Z,{onSubmit:n.handleSubmit,children:[(0,a.jsxs)(i.Z.Group,{widths:"equal",children:[(0,a.jsx)(i.Z.Input,{name:"email",type:"text",placeholder:"Correo electronico",value:n.values.email,onChange:n.handleChange,error:n.errors.email}),(0,a.jsx)(i.Z.Input,{name:"username",type:"text",placeholder:"Nombre de usuario",value:n.values.username,onChange:n.handleChange,error:n.errors.username})]}),(0,a.jsxs)(i.Z.Group,{widths:"equal",children:[(0,a.jsx)(i.Z.Input,{name:"name",type:"text",placeholder:"Nombre y apellidos",value:n.values.name,onChange:n.handleChange,error:n.errors.name}),(0,a.jsx)(i.Z.Input,{name:"password",type:"password",placeholder:"Contrase\xf1a",value:n.values.password,onChange:n.handleChange,error:n.errors.password})]}),(0,a.jsx)(i.Z.Button,{type:"submit",fluid:!0,loading:n.isSubmitting,children:"Registrarse"})]})}var c=r(5409);let h=new o.gx;function p(){(0,t.useRouter)();let{login:e}=(0,c.a)(),n=(0,s.TA)({initialValues:{identifier:"",password:""},validationSchema:u.Ry({identifier:u.Z_().required(!0),password:u.Z_().required(!0)}),validateOnChange:!1,onSubmit:async n=>{try{let r=await h.login(n);e(r.jwt)}catch(e){console.error(e)}}});return(0,a.jsxs)(i.Z,{onSubmit:n.handleSubmit,children:[(0,a.jsx)(i.Z.Input,{name:"identifier",type:"text",placeholder:"Correo electronico o nombre de usuario",value:n.values.identifier,onChange:n.handleChange,error:n.errors.identifier}),(0,a.jsx)(i.Z.Input,{name:"password",type:"password",placeholder:"Contrase\xf1a",value:n.values.password,onChange:n.handleChange,error:n.errors.password}),(0,a.jsx)(i.Z.Button,{type:"submit",fluid:!0,loading:n.isSubmitting,children:"Entrar"})]})}},5122:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var a=r(5893),i=r(1664),s=r.n(i),t=r(9668),o=r(5750),u=r(1861),l=r(971),d=r.n(l);function c(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.pQ,{title:"Iniciar sesi\xf3n"}),(0,a.jsx)(t.ew,{children:(0,a.jsxs)("div",{className:d().signIn,children:[(0,a.jsx)("h3",{children:"Iniciar sesi\xf3n"}),(0,a.jsx)(o.U,{}),(0,a.jsx)("div",{className:d().actions,children:(0,a.jsx)(s(),{href:"/join/sign-up",children:"\xbfNo tienes una cuenta?"})})]})})]})}},971:function(e){e.exports={signIn:"sign-in_signIn__h5A_V",actions:"sign-in_actions__LJeP5"}}},function(e){e.O(0,[832,846,147,668,774,888,179],function(){return e(e.s=6640)}),_N_E=e.O()}]);