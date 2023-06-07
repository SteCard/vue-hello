"use strict";

// RICHIAMO FUNZIONE CREATE_APP VUE.JS E LA INSERISCO IN UNA CONSTANTE
const {createApp} = Vue;

// FUNZIONE CREATE_APP
createApp({

    data(){

        return{
            msg : "久しぶりだな"
        }
    }
}).mount('#app'); // RICHIAMO ID DOM 