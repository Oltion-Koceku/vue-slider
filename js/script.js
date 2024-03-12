const {createApp} = Vue;

createApp({
  data(){
    return{
      imgs:[
        {
          nome: "Spiderman",
          img: "assets/img/01.webp",
          descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
        },
        {
          nome: "ratchet and clank",
          img: "assets/img/02.webp",
          descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
        },
        {
          nome: "Fortnite",
          img: "assets/img/03.webp",
          descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
        },
        {
          nome: "Stray",
          img: "assets/img/04.webp",
          descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
        },
        {
          nome: "Avengers",
          img: "assets/img/05.webp",
          descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
        }
        ]
    }
  },
  methods: {
      
  }
}).mount("#app")

