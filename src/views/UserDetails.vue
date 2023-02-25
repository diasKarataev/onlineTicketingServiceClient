<template>
<h2>User#{{  user.id }}</h2>
<p>{{ user.name }} {{  user.surname }}</p>
<p>Email: {{ user.email }}</p>
<p>Password: {{ user.password }}</p>
</template>
<script lang="ts">
import router from '@/router';
import axios from 'axios';
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
    methods:{

    }
  }
</script>