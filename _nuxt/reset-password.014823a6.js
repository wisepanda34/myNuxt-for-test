import{_ as k}from"./Header.c1e84685.js";import{u as D,r as g,m as q,s as T}from"./index.574d0048.js";import{_ as V,k as j,c as a,b as B,a as e,g as M,F as x,r as f,f as Z,o,t as _,h as U,l as C,n as O}from"./entry.d1983b2b.js";import"./nuxt-link.44f51549.js";const P={setup(){return{v$:D()}},data(){return{signIn:!0,signUp:!0,resetData:{password:{name:"Password",type:"password",placeholder:"min 4 characters",value:""},confirmPassword:{name:"Confirm password",type:"password",placeholder:"repeat password",value:""}}}},validations(){return{resetData:{password:{value:{required:g,minLength:q(4)}},confirmPassword:{value:{required:g,sameAsPassword:T(this.resetData.password.value)}}}}},methods:{submitReset(){this.v$.$invalid||j().push("/login")}}},S={class:"flex flex-col justify-center pb-20"},$=Z(`<div class="mx-auto max-w-lg"><svg class="text-green-600 mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294C22 4.818 19.17 2 15.68 2S9.362 4.818 9.362 8.293c0 1.61.735\r
          2.781.735 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439\r
          2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.405 2.645.586 3.086 0c.735-1.024 0-2.049\r
          0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"></path><path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196Z"></path></g></svg><h2 class="text-2xl sm:text-3xl font-bold text-gray-800">set a new password</h2></div>`,1),R={class:"bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 sm:w-96 w-50"},H=e("h3",{class:"text-center text-gray-700 mb-5"},"your email",-1),L=["for"],N={class:"relative rounded-md shadow-md mt-2"},A=e("div",{class:"absolute left-0 inset-y-0 flex items-center pl-1.5"},[e("svg",{class:"text-gray-400 w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"})])],-1),F=["onUpdate:modelValue","type","id","name","placeholder","onBlur"],z=e("button",{type:"submit",class:"flex justify-center items-center mx-auto rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full transition duration-200 ease-in-out"}," Set password ",-1);function E(b,c,I,n,t,d){const y=k;return o(),a("div",null,[B(y,{signUp:t.signUp},null,8,["signUp"]),e("main",S,[$,e("div",R,[H,e("form",{action:"#",autocomplete:"off",class:"space-y-6",novalidate:"",onSubmit:c[0]||(c[0]=M((...s)=>d.submitReset&&d.submitReset(...s),["prevent"]))},[(o(!0),a(x,null,f(Object.values(t.resetData),(s,r)=>{var i,u,m,p,h,v,w;return o(),a("div",{key:r},[e("label",{class:"block text-sm font-medium text-gray-700 pl-1",for:s.name},_(s.name),9,L),e("div",N,[A,U(e("input",{"onUpdate:modelValue":l=>s.value=l,type:s.type,id:s.name,name:s.name,class:O(["border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full",{"border-red-500 focus:border-red-500":(u=(i=n.v$.resetData[Object.keys(t.resetData)[r]])==null?void 0:i.value)==null?void 0:u.$error,"border-[#42d392] ":!((p=(m=n.v$.resetData[Object.keys(t.resetData)[r]])==null?void 0:m.value)!=null&&p.$invalid)}]),placeholder:s.placeholder,onBlur:(v=(h=n.v$.resetData[Object.keys(t.resetData)[r]])==null?void 0:h.value)==null?void 0:v.$touch},null,42,F),[[C,s.value]])]),(o(!0),a(x,null,f((w=n.v$.resetData[Object.keys(t.resetData)[r]])==null?void 0:w.$errors,l=>(o(),a("p",{key:l.$uid,class:"block text-red-500 text-sm mt-2 h-5"},_(l.$message),1))),128))])}),128)),z],32)])])])}const W=V(P,[["render",E]]);export{W as default};
