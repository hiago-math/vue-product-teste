(function(){var t={6841:function(t,e,a){"use strict";var o=a(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],i=a(70),n=a(680);const l=i.ZP.create({baseURL:"http://product.localhost/api",headers:{"Content-Type":"multipart/form-data, application/json",Acess:"application/json",Authorization:`Bearer ${n.Z.get("_auth_app_token")}`}});var c=l,d={name:"App",data(){return{}}},u=d,m=a(1001),p=(0,m.Z)(u,r,s,!1,null,null,null),f=p.exports,h=a(2631),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"gradient-custom",on:{change:t.getProducts}},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("App Products")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item-dropdown",{staticStyle:{"margin-left":"auto"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Ações")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{to:"/list"}},[t._v("Lista de Produtos")]),e("b-dropdown-item",{attrs:{to:"/create"}},[t._v("Cadastro de Produtos")])],1),e("b-nav-item-dropdown",{staticStyle:{"margin-left":"auto"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Usuario")])]},proxy:!0}])},[e("b-dropdown-item",{on:{click:t.logout}},[t._v("Sign Out")])],1)],1)],1)],1),e("b-card-header",[e("h1",[t._v("Lista de produtos")])]),e("div",{staticClass:"container mt-2"},[t.isProductEmpty?[e("div",{staticClass:"empty-data mt-2"},[e("b-button",{staticClass:"mt-2",attrs:{variant:"outline-primary",size:"lg",to:"/form"}},[t._v(" Criar produto ")])],1)]:t._l(t.products,(function(a){return e("div",{key:a.id},[e("b-card",{staticClass:"mb-2 mt-2",attrs:{title:a.name}},[e("div",{staticClass:"mb-2"},[e("img",{staticStyle:{"max-width":"200px","max-height":"150px",width:"auto",height:"auto"},attrs:{src:a.image,alt:a.image}})]),e("b-button",{staticStyle:{"margin-right":"5px"},attrs:{variant:"outline-secondary"},on:{click:function(e){return t.edit(a.id)}}},[t._v(" Editar ")]),e("b-button",{staticStyle:{"margin-right":"5px"},attrs:{variant:"outline-danger"},on:{click:function(e){return t.remove(a.id,a.name)}}},[t._v(" Excluir ")])],1)],1)})),e("b-modal",{ref:"modalRemove",attrs:{"hide-footer":"",title:"Exclusão de produto"}},[e("div",{staticClass:"d-block text-center"},[t._v(" Deseja realmente excluir esse produto? "+t._s(t.productSelected.name)+" ")]),e("div",{staticClass:"mt-3 d-flex justify-content-end"},[e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-secondary"},on:{click:t.hideModal}},[t._v(" Cancelar ")]),e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.confirmRemoveProduct(t.productSelected.id)}}},[t._v(" Excluir ")])],1)])],2)],1)},b=[],g=(a(7658),{name:"Products",data(){return{products:{},productSelected:[]}},created(){this.$watch((()=>this.$router),((t,e)=>{console.log(t)}))},async mounted(){this.products=await this.getProducts()},methods:{edit(t){this.$router.push({name:"create",params:{id:t}})},logout(){c.post("/auth/logout").then((t=>{200===t.status&&(n.Z.remove("_auth_app_token"),this.$router.push({name:"login"}))})).catch((()=>{location.reload()}))},async getProducts(){return await c.get("product/all").then((t=>t.data.response)).catch((t=>{location.reload(),console.log(t)}))},async remove(t,e){this.productSelected={name:e,id:t},this.$refs.modalRemove.show()},hideModal(){this.$refs.modalRemove.hide()},deleteUser(t){c["delete"]("product/"+t).then((t=>t))},async confirmRemoveProduct(t){this.deleteUser(t),this.products=await this.getProducts(),this.hideModal(),location.reload()}},computed:{isProductEmpty(){return this.products===[]}}}),y=g,_=(0,m.Z)(y,v,b,!1,null,"256dd44e",null),w=_.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"gradient-custom"},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("App Products")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item-dropdown",{staticStyle:{"margin-left":"auto"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Ações")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{id:"list",to:"/list"}},[t._v("Lista de Produtos")]),e("b-dropdown-item",{attrs:{id:"crete",to:"/create"}},[t._v("Cadastro de Produtos")])],1),e("b-nav-item-dropdown",{staticStyle:{"margin-left":"auto"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Usuario")])]},proxy:!0}])},[e("b-dropdown-item",{on:{click:t.logout}},[t._v("Sign Out")])],1)],1)],1)],1),e("b-card-header",[e("h1",[t._v("Cadastro de produtos")])]),e("div",{staticClass:"container mt-2"},[e("b-form",[e("b-form-group",{staticClass:"mt-2",attrs:{label:"Nome:","label-for":"name","label-size":"lg"}},[e("b-form-input",{attrs:{id:"name",type:"text",placeholder:"Ex.: Laranja pera",required:"",autocomplete:"off",size:"lg"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e("b-form-invalid-feedback",{attrs:{id:"name-feedback"}},[t._v("Campo obrigatório.")])],1),e("b-form-group",{staticClass:"mt-2",attrs:{label:"Categoria:","label-for":"category","label-size":"lg"}},[e("b-form-select",{staticClass:"mb-2",staticStyle:{width:"500px"},attrs:{"select-size":"6",required:""},model:{value:t.form.category.selected,callback:function(e){t.$set(t.form.category,"selected",e)},expression:"form.category.selected"}},[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- SELECIONE UM --")]),t._l(t.form.category.options,(function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.name))])}))],2),e("b-form-invalid-feedback",{attrs:{id:"image-feedback"}},[t._v("Campo obrigatório.")])],1),e("b-form-group",{staticClass:"mt-2",attrs:{label:"Imagem:","label-for":"image","label-size":"lg"}},[e("b-form-file",{staticClass:"mt-1 mb-3",attrs:{plain:"",accept:"image/*",enctype:"”multipart/form-data”",size:"lg"},on:{change:t.onChange},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),e("b-button",{attrs:{type:"submit",variant:"outline-primary"},on:{click:t.saveTask}},[t._v(" Salvar ")])],1)],1)],1)},k=[],x={methods:{showToast(t,e,a){this.$root.$bvToast.toast(a,{title:e,autoHideDelay:3e3,variant:t,solid:!0,confirm:!0})}}},P=a(5795),S={name:"Form",mixins:[x],data(){return{form:{file:null,name:"",image:null,category:{selected:null,options:{}}},methodSave:"new"}},validations:{form:{subject:{required:P.C1,minLength:(0,P.Ei)(5)}}},async created(){this.$route.params.id&&(this.methodSave="update",await c.get("product/"+this.$route.params.id).then((t=>{this.form.name=t.data.response.name,this.form.image=t.data.response.image,this.form.category.selected=t.data.response.category_id})))},async mounted(){this.form.category.options=await this.getCategories()},methods:{saveTask(){let t={name:this.form.name,category_id:this.form.category.selected,image:this.form.image};"update"===this.methodSave?(c.post("product/"+this.$route.params.id,t),this.showToast("success","Sucesso!","Produto atualizado com sucesso")):(c.post("product",t),this.showToast("success","Sucesso!","Produto criada com sucesso")),this.$router.push("list")},async getCategories(){return await c.get("category/all").then((t=>t.data.response)).catch((t=>{401===t.response.status&&n.Z.remove("_auth_app_token"),console.log(t)}))},onChange(){let t=new FormData;t.append("image",this.form.image)},logout(){c.post("/auth/logout").then((()=>{n.Z.remove("_auth_app_token"),this.$router.push({name:"login"})})).catch((()=>{location.reload()}))}},computed:{getValidation(){return!1===this.$v.form.subject.$dirty?null:!this.$v.form.subject.$error}}},$=S,E=(0,m.Z)($,C,k,!1,null,null,null),j=E.exports,O=function(){var t=this,e=t._self._c;return e("section",{staticClass:"vh-100 gradient-custom"},[e("div",{staticClass:"container py-5 h-100"},[e("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[e("div",{staticClass:"col-12 col-md-8 col-lg-6 col-xl-5"},[e("div",{staticClass:"card bg-dark text-white",staticStyle:{"border-radius":"1rem"}},[e("div",{staticClass:"card-body p-5 text-center"},[e("div",{staticClass:"mb-md-5 mt-md-4 pb-5"},[e("h2",{staticClass:"fw-bold mb-2 text-uppercase"},[t._v("Login")]),e("p",{staticClass:"text-white-50 mb-5"},[t._v("Entre com email e senha!")]),e("div",{staticClass:"form-outline form-white mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",id:"typeEmailX"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"typeEmailX"}},[t._v("Email")])]),e("div",{staticClass:"form-outline form-white mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"typePasswordX"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"typePasswordX"}},[t._v("Password")])]),e("button",{staticClass:"btn btn-outline-light btn-lg px-5",attrs:{type:"submit"},on:{click:t.login}},[t._v("Login")])]),e("b-modal",{ref:"modalError",attrs:{"hide-footer":"",title:"Erro com o Login"}},[e("div",{staticClass:"d-block text-center"},[t._v(" Senha ou usuario incorreto ")]),e("div",{staticClass:"mt-3 d-flex justify-content-end"},[e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-secondary"},on:{click:t.hideModal}},[t._v(" Fechar ")])],1)])],1)])])])])])},Z=[],T={name:"Login",data(){return{email:"",password:""}},methods:{login(){const t={email:this.email,password:this.password};c.post("/auth/login",t).then((t=>{n.Z.set("_auth_app_token",t.data.access_token,{expires:t.data.expire_in}),this.$router.push("list")})).catch((()=>{this.$refs.modalError.show()}))},hideModal(){this.$refs.modalError.hide(),location.reload()}}},L=T,z=(0,m.Z)(L,O,Z,!1,null,null,null),M=z.exports,A={auth(t,e,a){c.get("/auth/hasToken").catch((()=>{n.Z.remove("_auth_app_token")}));const o=n.Z.get("_auth_app_token");o||a("/"),a()}};o["default"].use(h.ZP);const R=[{path:"/",name:"login",component:M},{path:"/list",name:"list",component:w,beforeEnter:A.auth},{path:"/create",name:"create",component:j,beforeEnter:A.auth}],U=new h.ZP({mode:"history",base:"/",routes:R});var X=U,F=a(6882),N=(a(7024),a(4951)),q=a(1984);o["default"].use(F.XG7),o["default"].use(N.ZP),q.H.$http=i.ZP,o["default"].config.productionTip=!1,new o["default"]({router:X,render:t=>t(f)}).$mount("#app")},4654:function(){}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,s){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],s=t[d][2];for(var n=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,i=o[0],n=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var d=l(a)}for(e&&e(o);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},o=self["webpackChunkapp_product"]=self["webpackChunkapp_product"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(6841)}));o=a.O(o)})();
//# sourceMappingURL=app.b1be63a0.js.map