const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio:'ciau'
    }
  },
  methods:{
    getApi(){
      mail.get('https://flynn.boolean.careers/exercises/api/random/mail')
    }
  }
}
).mount('#app');