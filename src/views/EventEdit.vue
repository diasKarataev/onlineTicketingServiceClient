<script lang="ts">
import router from '@/router';
import axios from 'axios';
import { reactive, ref } from 'vue';



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
    methods: {
        async updateSubmit(){
            axios.put(`http://localhost:8080/api/events/${this.id}`, this.event)
            console.log(`Event#${this.id} updated`)
            router.push('/')
        }
    }
}
    

</script>


<template>
    <body class="text-center">
  <div class="form-signin text-center m-auto" style="width: 300px">
      <form @submit.prevent="updateSubmit()">
      <h1 class=" fw-normal">Update event#{{ event.id }}</h1>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="event.title">
        <label for="floatingInput">Title:</label>
      </div>
      <div class="form-floating">

        <input type="text" class="form-control" id="floatingPassword" placeholder="#" v-model="event.description">
        <label for="floatingPassword">Description: </label>
      </div>
      <div class="form-floating">
          
        <input type="number" class="form-control" id="floatingPassword" placeholder="#" v-model="event.capacity">
        <label for="floatingPassword">Capacity: </label>
      </div>
      <div class="form-floating">
        <input type="number" class="form-control" id="floatingPassword" placeholder="#" v-model="event.ticketPrice">
        <label for="floatingPassword">Ticket price </label>
      </div>
      <button class="w-100 btn btn-lg btn-success" type="submit" value="Update">Update event</button>
    </form>
  </div>
</body>
</template>