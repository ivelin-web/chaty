"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[626],{6571:function(n,e,r){r(2791);e.Z=r.p+"static/media/logo.ccfbd90732828204fa6989c0f15638c0.svg"},6626:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var a,s=r(4942),o=r(1413),t=r(885),i=r(2791),d=r(3504),l=r(6871),c=r(168),m=r(6031).ZP.div(a||(a=(0,c.Z)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    align-items: center;\n    background: #131324;\n    .brand {\n        display: flex;\n        align-items: center;\n        gap: 1rem;\n        justify-content: center;\n        img {\n            height: 5rem;\n        }\n        h1 {\n            color: #fff;\n            text-transform: uppercase;\n        }\n    }\n    form {\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n        justify-content: center;\n        background: #00000076;\n        border-radius: 2rem;\n        padding: 3rem 5rem;\n        @media screen and (max-width: 600px) {\n            height: 100vh;\n            width: 100vw;\n        }\n        div {\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n            input {\n                background: transparent;\n                padding: 1rem;\n                border: 0.1rem solid #4e0eff;\n                border-radius: 0.4rem;\n                color: #fff;\n                with: 100%;\n                font-size: 1rem;\n                &:focus {\n                    border: 0.1rem solid #997af0;\n                    outline: none;\n                }\n            }\n            button {\n                background: #997af0;\n                color: #fff;\n                padding: 1rem 2rem;\n                border: none;\n                font-weight: bold;\n                cursor: pointer;\n                border-radius: 0.4rem;\n                font-size: 1rem;\n                text-transform: uppercase;\n                transition: background 0.5s ease-in-out;\n                &:hover {\n                    background: #4e0eff;\n                }\n            }\n            span {\n                display: flex;\n                gap: 1rem;\n                justify-content: space-between;\n                color: #fff;\n                text-transform: uppercase;\n                @media screen and (max-width: 500px) {\n                    flex-direction: column;\n                    gap: 0.3rem;\n                }\n                a {\n                    color: #4e0eff;\n                    text-decoration: none;\n                    font-weight: bold;\n                }\n            }\n            span.errorText {\n                color: #e00;\n                font-weight: 300;\n                font-size: 0.9rem;\n                text-transform: none;\n                margin-top: -1rem;\n            }\n        }\n    }\n"]))),u=r(6571),f=r(9112),p=r(8174),g=(r(5462),r(184));function h(){var n,e,r,a,c=(0,i.useState)({username:"",email:"",password:"",confirmPassword:""}),h=(0,t.Z)(c,2),x=h[0],v=h[1],w=(0,i.useState)({}),b=(0,t.Z)(w,2),j=b[0],y=b[1],k=(0,i.useState)(!1),Z=(0,t.Z)(k,2),C=Z[0],P=Z[1],N=(0,l.s0)(),T=function(n){v((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,s.Z)({},n.target.name,n.target.value))}))};return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(m,{children:(0,g.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:function(n){n.preventDefault(),P(!0),(0,f.z2)(x).then((function(n){p.Am.success(n.data.message),N("/login")})).catch((function(n){var e,r=n.response;P(!1),y((null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.errors)||{})}))},children:[(0,g.jsxs)("div",{className:"brand",children:[(0,g.jsx)("img",{src:u.Z,alt:"Logo"}),(0,g.jsx)("h1",{children:"chaty"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{value:x.username,type:"text",placeholder:"Username",name:"username",onChange:T}),(null===j||void 0===j||null===(n=j.username)||void 0===n?void 0:n.message)&&(0,g.jsx)("span",{className:"errorText",children:j.username.message}),(0,g.jsx)("input",{value:x.email,type:"email",placeholder:"Email",name:"email",onChange:T}),(null===j||void 0===j||null===(e=j.email)||void 0===e?void 0:e.message)&&(0,g.jsx)("span",{className:"errorText",children:j.email.message}),(0,g.jsx)("input",{value:x.password,type:"password",placeholder:"Password",name:"password",onChange:T}),(null===j||void 0===j||null===(r=j.password)||void 0===r?void 0:r.message)&&(0,g.jsx)("span",{className:"errorText",children:j.password.message}),(0,g.jsx)("input",{value:x.confirmPassword,type:"password",placeholder:"Confirm Password",name:"confirmPassword",onChange:T}),(null===j||void 0===j||null===(a=j.confirmPassword)||void 0===a?void 0:a.message)&&(0,g.jsx)("span",{className:"errorText",children:j.confirmPassword.message}),(0,g.jsx)("button",{type:"submit",children:C?"Loading...":"Register"}),(0,g.jsxs)("span",{children:["already have an account ? ",(0,g.jsx)(d.rU,{to:"/login",children:"Login"})]})]})]})})})}}}]);
//# sourceMappingURL=626.7f71501c.chunk.js.map