(this["webpackJsonpreact-quick-starter"]=this["webpackJsonpreact-quick-starter"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(30),i=c.n(n),l=(c(38),c(39),c(14)),o=(c(40),c(17)),r=c(31),j={apiKey:"AIzaSyA_1Qo_I1UYzW-KH4pI4bMUcyJRo7rD-lA",authDomain:"fir-authentication-f4897.firebaseapp.com",projectId:"fir-authentication-f4897",storageBucket:"fir-authentication-f4897.appspot.com",messagingSenderId:"92605586204",appId:"1:92605586204:web:6fe770277e4046f26878d9"},b=function(){Object(r.a)(j)},d=c(48),u=c(49),m=c(50),h=c(52),x=c(32),O=c(51),f=c(3);b();var p=new o.c,g=new o.b,N=new o.a,w=Object(o.e)();var y=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(l.a)(n,2),r=i[0],j=i[1],b=Object(s.useState)(""),y=Object(l.a)(b,2),v=y[0],k=y[1],I=Object(s.useState)(""),S=Object(l.a)(I,2),C=S[0],L=S[1],R=Object(s.useState)(""),B=Object(l.a)(R,2),P=B[0],F=B[1],T=Object(s.useState)(!1),U=Object(l.a)(T,2),G=U[0],q=U[1],A=Object(s.useState)(""),E=Object(l.a)(A,2),D=E[0],J=E[1],W=Object(s.useState)(!1),Y=Object(l.a)(W,2),z=Y[0],K=Y[1],M=function(e,t){Object(o.h)(w,e,t).then((function(e){var t=e.user;console.log(t),J("Login Successful")})).catch((function(e){J(e.message)}))},_=function(e,t){C.length<8?F("password must be at least 8 characters"):(F(""),Object(o.d)(w,e,t).then((function(e){var t=e.user;console.log(t),J("Registration Successful"),Q(),H()})).catch((function(e){J(e.message)})))},H=function(){Object(o.f)(w.currentUser)},Q=function(){Object(o.k)(w.currentUser,{displayName:r})};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)("div",{className:"col-12 col-md-8 col-lg-6 mx-auto",children:Object(f.jsxs)(m.a,{className:"mt-2 shadow-sm pt-3 pb-5 px-5",onSubmit:function(e){e.preventDefault(),z?M(v,C):_(v,C)},children:[Object(f.jsxs)("h5",{className:"text-secondary mb-3",children:[" ",Object(f.jsx)("i",{className:"fas fa-user-tie text-success"})," Please",z?" LogIn !":" Resgister !"]}),z?Object(f.jsx)("span",{}):Object(f.jsxs)(m.a.Group,{className:"mb-3",controlId:"name",children:[Object(f.jsx)(m.a.Label,{children:"Your Name"}),Object(f.jsx)(m.a.Control,{onBlur:function(e){j(e.target.value),console.log(e.target.value)},type:"text",placeholder:"Enter Your Name",required:!0})]}),Object(f.jsxs)(m.a.Group,{className:"mb-3",controlId:"email",children:[Object(f.jsx)(m.a.Label,{children:"Email address"}),Object(f.jsx)(m.a.Control,{onBlur:function(e){k(e.target.value)},type:"email",placeholder:"Enter email",required:!0}),Object(f.jsx)(m.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(f.jsxs)(m.a.Group,{className:"mb-3",controlId:"password",children:[Object(f.jsx)(m.a.Label,{children:"Password"}),Object(f.jsx)(m.a.Control,{onBlur:function(e){L(e.target.value)},type:"password",placeholder:"Password",required:!0}),Object(f.jsx)(m.a.Text,{className:"text-danger",children:P}),Object(f.jsx)(m.a.Text,{className:"text-danger",children:G?Object(f.jsxs)("ul",{className:"text-muted",children:[Object(f.jsx)("li",{children:"Password must contain 2 uppercase letters"}),Object(f.jsx)("li",{children:"must incluse at least one special character"}),Object(f.jsx)("li",{children:"must contain at least three lowercase letters"}),Object(f.jsx)("li",{children:"must incluse at least two digits"}),Object(f.jsx)("li",{children:"Password should be at least 8 characters long"})]}):Object(f.jsx)("span",{})})]}),Object(f.jsx)(m.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)(m.a.Check,{onChange:function(e){K(e.target.checked)},type:"checkbox",label:"Already Registered?"}),z?Object(f.jsx)(h.a,{onClick:function(){v?(Object(o.g)(w,v),J("Password reset email sent !")):J("Email field is empty")},className:"btn-sm btn-danger text-white fw-semi-bold",children:"Forgot password?"}):Object(f.jsx)(h.a,{onClick:function(){q(G=!G)},className:"btn-sm btn-success text-white fw-semi-bold",children:"password rules"})]})}),Object(f.jsx)("p",{className:"text-secondary",children:D}),Object(f.jsxs)(h.a,{variant:"success",type:"submit",className:"px-4 py-2",children:[Object(f.jsx)("i",{className:"fas fa-sign-in-alt me-2 text-warning"}),z?" LogIn !":" Resgister !"]})]})})})}),Object(f.jsxs)("div",{className:"divider",children:[Object(f.jsx)("hr",{className:"w-50 mx-auto"}),Object(f.jsx)("h6",{className:"text-center text-secondary",children:"or"})]}),Object(f.jsx)(d.a,{children:Object(f.jsx)(u.a,{children:c.name?Object(f.jsx)(x.a,{className:"col-12 col-md-8 col-lg-4 mx-auto",children:Object(f.jsxs)(O.a,{className:"text-center pt-2 mt-5",children:[Object(f.jsxs)(O.a.Title,{children:["Welcome",Object(f.jsx)("span",{className:"text-success",children:" ".concat(c.name)})," "]}),Object(f.jsx)(O.a.Img,{variant:"top",src:c.photo,className:"img-fluid",style:{height:"150px",width:"150px",borderRadius:"100%",display:"block",margin:"auto"}}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(O.a.Text,{children:c.email})}),Object(f.jsx)(O.a.Footer,{children:Object(f.jsx)(h.a,{onClick:function(){Object(o.j)(w).then((function(){a({})}))},className:"d-block mx-auto btn-danger fw-bold px-5 py-2",children:"Logout"})})]})}):Object(f.jsx)("div",{className:"col-12 col-md-10 col-lg-8 mx-auto",children:Object(f.jsxs)("div",{className:"button-container d-flex justify-content-center",children:[Object(f.jsxs)(h.a,{className:"btn-success fw-semi-bold  me-1",onClick:function(){Object(o.i)(w,p).then((function(e){var t=e.user,c=t.displayName,s=t.email,n=t.photoURL;a({name:c,email:s,photo:n})})).catch((function(e){return alert(e.message)}))},children:[Object(f.jsx)("i",{className:"fab fa-google me-2 text-warning"}),"SignIn with Google"]}),Object(f.jsxs)(h.a,{className:"btn-success fw-semi-bold  me-1",onClick:function(){Object(o.i)(w,N).then((function(e){var t=e.user,c=t.displayName,s=t.email,n=t.photoURL;a({name:c,email:s,photo:n})}))},children:[Object(f.jsx)("i",{className:"fab fa-facebook me-2 text-warning"}),"SignIn with Facebook"]}),Object(f.jsxs)(h.a,{className:"btn-success fw-semi-bold",onClick:function(){Object(o.i)(w,g).then((function(e){var t=e.user,c=t.displayName,s=t.email,n=t.photoURL;a({name:c,email:s,photo:n})}))},children:[Object(f.jsx)("i",{className:"fab fa-github me-2 text-warning"}),"SignIn with Github"]})]})})})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.a05ab969.chunk.js.map