<script lang="ts">
import router from '@/router';
import axios from 'axios';
import { reactive, ref } from 'vue';



export default {
    data(){
        return{
            id: this.$route.params.id,
            user :{}
        }
    },
    async created() {
    let response = await axios.get(`http://localhost:8080/api/users/${this.id}`)
    this.user = response.data;
    },
    methods: {
        async updateSubmit(){
            axios.put(`http://localhost:8080/api/users/${this.id}`, this.user)
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
      <h1 class=" fw-normal">Update user#{{ user.id }}</h1>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="user.name">
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating">

        <input type="text" class="form-control" id="floatingPassword" placeholder="#" v-model="user.surname">
        <label for="floatingPassword">Suename </label>
      </div>
      <div class="form-floating">
          
        <input type="email" class="form-control" id="floatingPassword" placeholder="#" v-model="user.email">
        <label for="floatingPassword">Email </label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="#" v-model="user.password">
        <label for="floatingPassword">Password </label>
      </div>
      <button class="w-100 btn btn-lg btn-success" type="submit" value="Update">Update user</button>
    </form>
  </div>
</body>
</template>