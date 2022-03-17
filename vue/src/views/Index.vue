<template>
    <div>
        <h3>DSFKJSDLKFJSLKJLK</h3>
        <h1>Bonjour à tout le monde</h1>
        {{count}}
        <button @click="increment()">INCREMENTER LA VALEUR</button>
        <form @submit="send">
            <input type="text" v-model="user.name">
            <input type="text" v-model="user.postnom">
            <input type="text" v-model="user.prenom">
            <button type="submit">J'envoie le formulaire</button>
        </form>
        <div v-if="user.name.length!=0">
            {{user.name}}
        </div>
    </div>
</template>

<script setup>
    import {computed} from 'vue'
    import store from '../store'
    const user={
        name:'',
        postnom:'',
        prenom:''
    }
    const number=1;
    const count=computed(()=>store.state.count)
    function increment(){
        store.dispatch('increment')
    }
    function send(ev){
        ev.preventDefault()
        store.dispatch('send',user)
    }
</script>