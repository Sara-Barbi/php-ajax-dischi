console.log('sono entrato nelle funz');
let app = new Vue({
   el:'#root',
   data:{
     nuovoA:[]
   },
   mounted:{
       show(){
           axios
           .get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then((risposta)=>{
               let risultato= risposta.data.response;
               console.log(risultato);
           })
           .catch((error)=>{
               console.log(error)
           })
       }
   },
});
