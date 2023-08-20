import{_ as L}from"./Header.c1e84685.js";import{_ as y}from"./nuxt-link.44f51549.js";import{u as E,r as V,e as C}from"./index.574d0048.js";import{_ as j,c as n,b as _,a as e,g as B,h as r,v as a,i as M,n as S,F as N,r as U,j as $,w as z,f as I,o as l,t as D,d as F}from"./entry.d1983b2b.js";const H={setup(){return{v$:E()}},data(){return{signIn:!0,signUp:!0,emailedLink:"",isEmailedLink:!1}},validations(){return{emailedLink:{required:V,email:C}}},methods:{submitEmailedLink(){this.v$.$invalid?alert("email is not valid"):this.isEmailedLink=!0}}},Z={class:"flex flex-col justify-center pb-20"},T=I(`<div class="mx-auto max-w-lg"><svg class="text-green-600 mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294C22 4.818 19.17 2 15.68 2S9.362 4.818 9.362 8.293c0 1.61.735\r
          2.781.735 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439\r
          2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.405 2.645.586 3.086 0c.735-1.024 0-2.049\r
          0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"></path><path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196Z"></path></g></svg><h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Forgot your password?</h2></div>`,1),q={class:"bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 sm:w-96 w-50"},G={class:"flex gap-4 items-center justify-between border border-green-300 rounded p-3 bg-green-50"},J=e("svg",{class:"text-green-500 mx-auto w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4Z"})],-1),P=e("p",{class:"text-green-800"},"We have emailed your password reset link.",-1),W=[J,P],A={key:0},K=e("label",{class:"block text-sm font-medium text-gray-400 pl-1",for:"email"},"Email",-1),O={class:"relative rounded-md shadow-md mt-2"},Q=e("div",{class:"absolute left-0 inset-y-0 flex items-center pl-1.5"},[e("svg",{class:"text-gray-400 w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"})])],-1),R={type:"submit",class:"flex justify-center items-center mx-auto mt-30 rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full transition duration-200 ease-in-out"};function X(Y,o,ee,i,t,d){var m,c,u,g,f,h;const b=L,k=y;return l(),n("div",null,[_(b,{signIn:t.signIn,signUp:t.signUp},null,8,["signIn","signUp"]),e("main",Z,[T,e("div",q,[e("form",{action:"#",autocomplete:"off",class:"space-y-5",novalidate:"",onSubmit:o[2]||(o[2]=B((...s)=>d.submitEmailedLink&&d.submitEmailedLink(...s),["prevent"]))},[r(e("div",G,W,512),[[a,t.isEmailedLink]]),t.isEmailedLink?$("",!0):(l(),n("div",A,[K,e("div",O,[Q,r(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.emailedLink=s),type:"email",id:"email",name:"email",class:S(["border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full",{"border-red-500 focus:border-red-500":(c=(m=i.v$)==null?void 0:m.emailedLink)==null?void 0:c.$error,"border-[#42d392] ":!((g=(u=i.v$)==null?void 0:u.emailedLink)!=null&&g.$invalid)}]),placeholder:"JohnDoe@gmail.com",onChange:o[1]||(o[1]=(...s)=>{var x,p,w,v;return((p=(x=i.v$)==null?void 0:x.emailedLink)==null?void 0:p.$touch)&&((v=(w=i.v$)==null?void 0:w.emailedLink)==null?void 0:v.$touch(...s))})},null,34),[[M,t.emailedLink]])]),(l(!0),n(N,null,U((h=(f=i.v$)==null?void 0:f.emailedLink)==null?void 0:h.$errors,s=>(l(),n("p",{key:s.$uid,class:"block text-red-500 text-sm mt-2 h-5"},D(s.$message),1))),128))])),r(e("button",R," Send reset link ",512),[[a,!t.isEmailedLink]])],32),r(_(k,{to:"/your-mail",type:"submit",class:"flex justify-center items-center mx-auto mt-30 rounded-md bg-green-600 py-2 px-4 mt-8 text-white hover:bg-green-700 font-semibold shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full transition duration-200 ease-in-out"},{default:z(()=>[F(" Go to your Mail ")]),_:1},512),[[a,t.isEmailedLink]])])])])}const ne=j(H,[["render",X]]);export{ne as default};