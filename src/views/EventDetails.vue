<template>
<p>Title: {{ event.title }}</p>
<p>Id: {{  event.id }}</p>
<p>Description: {{  event.description }}</p>
<b>{{ event.capacity }}</b> tickets left
<p>Ticket price: {{ event.ticketPrice }}</p>

<div class="text-center"><button class="btn btn-outline-success" @click="buyTicket()">BuyTicket</button> </div>
</template>
<script lang="ts">
import router from '@/router';
import axios from 'axios';
export default {
    data(){
        return{
            id: this.$route.params.id,
            event :{}
        }
    },
    async created() {
    let response = await axios.get(`http://localhost:8080/api/events/${this.id}`)
    this.event = response.data;
    },
    methods:{
        async buyTicket() {
        axios.post(`http://localhost:8080/api/tickets/${this.id}/buyTicket`)
        console.log('Ticket bought')
        router.push('/')
    }
    }
  }
</script>