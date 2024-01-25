<!-- Ce composant est en mode OPTION API -->

<script >
export default {
    name: "MyOptionComponent",
    props: {
        msg: String
    },
    data(){
        return {
            compteur: 0,
            message: "O'ScuuuuuUUU",
        }
    },
    methods: {
        enAvant(){
            this.compteur++
        },
        enArriere(){
            this.compteur = this.compteur **2
        },
    },
}
</script>

<template>
<section>
    <h2>Hello !</h2>
    <p>{{msg}}</p>
    <p>{{ message }}</p>
    <p>Le compte est de {{ compteur }}</p>
<button @:click="enAvant">Tape dessus</button>
<button @:click="enArriere">Allez cogne</button>
</section>
</template>
