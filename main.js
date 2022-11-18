const { createApp } = Vue;

createApp({
  data(){
    return{
      title: 'Axios Mail',
      emailList: []
    }
  },
  methods:{
    getApi(){
      for (let i = 1; i <= 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(result => {
        this.emailList.push(result.data.response)
     })
    }
   }   
  }
).mount('#app');
