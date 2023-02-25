<template>
    <body class="text-center">
      <div class="form-signin text-center m-auto" style="width: 300px">
        <form @submit.prevent="onSubmit">
          <h1 class=" fw-normal">Please sign in</h1>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
              v-model="newUser.name">
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="newUser.surname">
            <label for="floatingPassword">Surname</label>
          </div>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="newUser.email">
            <label for="floatingPassword">Email</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
              v-model="newUser.password">
            <label for="floatingPassword">Password</label>
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

const newUser = reactive({
  email: '',
  password: '',
  name: '',
  surname: '',
})

function onSubmit() {
  axios.post("http://localhost:8080/api/users/add", newUser);
  router.push('/users');
}
</script>