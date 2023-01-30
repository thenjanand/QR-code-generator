const qrFormEl=document.getElementById("qrForm");

qrFormEl.addEventListener("submit",(event)=>{
event.preventDefaultl();

const formData=new FormData(qrFormEl);
const text=formData.get("qrText");

console.log("text",text);


});