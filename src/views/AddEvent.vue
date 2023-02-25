<template>
    <body class="text-center">
      <div class="form-signin text-center m-auto" style="width: 300px">
        <form @submit.prevent="onSubmit">
          <h1 class=" fw-normal">Please sign in</h1>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
              v-model="newEvent.title">
            <label for="floatingInput">Title</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="newEvent.description">
            <label for="floatingPassword">Description</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="newEvent.capacity">
            <label for="floatingPassword">Capacity</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="newEvent.ticketPrice">
            <label for="floatingPassword">Ticket Price</label>
          </div>
          <button class="w-100 btn btn-lg btn-success" type="submit">Create event</button>
          <p class="mt-5 mb-3 text-muted">© 2017–2023</p>
        </form>
      </div>
  </body>
  </template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

import axios from 'axios';
import router from '@/router';

const newEvent = reactive({
  title: '',
  description: '',
  capacity: 0,
  ticketPrice: 0
})

function onSubmit() {
  axios.post("http://localhost:8080/api/events/add", newEvent);
  router.push('/');
}
</script>