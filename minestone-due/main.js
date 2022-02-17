let app = new Vue({
   el:'#root',
   data:{
     nuovoA:[]
   },
   created() {
    this.show();
  },
   methods:{
       show(){
           axios
           .get('http://localhost/Boolean/php-ajax-dischi-api/minestone-due/api.php')
           .then((risposta)=>{
               let risultato= risposta.data;
               this.nuovoA=risultato;
               console.log(nuovoA)
           })
           .catch((errore)=>{
               console.log(errore);
           })
       }
   },
});
