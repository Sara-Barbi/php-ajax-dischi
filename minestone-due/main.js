let app = new Vue({
   el:'#root',
   data:{
     nuovoA:[]
   },
   methods:{
       show(){
           axios
           .get('http://localhost/Boolean/php-ajax-dischi-api/minestone-due/api.php')
           .then((risposta)=>{
               let risultato= risposta.data;
               console.log(risultato);
           })
           .catch((errore)=>{
               console.log(errore);
           })
       }
   },
});
