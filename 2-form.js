import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),r=a.elements.email,c=a.elements.message,s="feedback-form-state";let t={email:"",message:""};const l=localStorage.getItem(s);var o,m;if(l)try{const e=JSON.parse(l);t={...t,...e},r.value=((o=e.email)==null?void 0:o.trim())||"",c.value=((m=e.message)==null?void 0:m.trim())||""}catch(e){console.error("Error ",e)}a.addEventListener("input",e=>{const{name:n,value:i}=e.target;t[n]=i.trim(),localStorage.setItem(s,JSON.stringify(t))});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log("Submitted formData:",t),t={email:"",message:""},localStorage.removeItem(s),a.reset()});r.addEventListener("focus",()=>{r.placeholder="Type area"});r.addEventListener("blur",()=>{r.placeholder=""});
//# sourceMappingURL=2-form.js.map
