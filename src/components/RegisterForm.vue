<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const user = reactive({
  email: '',
  password: '',
  name: '',
  surname: ''
});

function onSubmit() {
  console.log(user);
  if (user.email != '' && user.password != '') {
    useAuthStore().register(user.email, user.password, user.name, user.surname);
  }
}
</script>

<template>
  <body class="text-center">
      <div class="form-signin text-center m-auto" style="width: 300px">
      <form @submit.prevent="onSubmit">
        <h1 class=" fw-normal">Sign Up</h1>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInput2" placeholder="Password" v-model="user.name">
          <label for="floatingInput2">Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInput3" placeholder="Password" v-model="user.surname">
          <label for="floatingInput3">Surname</label>
        </div>
        <p class="mt-5 mb-3 text-muted">Changed your mind??🤨 <routerLink to="/login">Back to Login</routerLink></p>
        
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2023</p>
      </form>
    </div>
    </body>
</template>
