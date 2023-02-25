<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const user = reactive({
  email: '',
  password: '',
});

function onSubmit() {
  console.log(user);
  if (user.email != '' && user.password != '') {
    useAuthStore().login(user.email, user.password);
  }
}
</script>

<template>
  <body class="text-center">
    <div class="form-signin text-center m-auto" style="width: 300px">
      <form @submit.prevent="onSubmit">
        <h1 class=" fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
            v-model="user.password">
          <label for="floatingPassword">Password</label>
        </div>
        <p class="mt-5 mb-3 text-muted">Don't have an account? <routerLink to="/register">SignUp</routerLink>
        </p>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2023</p>
      </form>
    </div>
  </body>
</template>
