<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
        <div class="col" v-for="user in users" key="user.id">
          <div class="card-body">
            <div class="col-4 text-center">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
                  dy=".3em">140x140</text>
              </svg>
              <h2 class="fw-normal">User#{{ user.id }} </h2>
              <p>{{ user.email }}</p>
              <div class="btn-group text-center m-2">
                <routerLink :to="`/users/${user.id}`" class="btn btn-sm btn-outline-secondary">View</routerLink>
                <routerLink :to="`/users/edit/${user.id}`" class="btn btn-sm btn-outline-secondary">Edit</routerLink>
                <button class="btn btn-sm btn-outline-danger" @click="remove(user.id)">Delete</button>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
    <div class="text-center"><button class="btn btn-outline-success" @click="$router.push('/users/add')">Add user</button>
    </div>

  </div>
</template>
<script lang="ts">
import router from '@/router';
import axios from 'axios';


export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async remove(id: string) {
      axios.delete(`http://localhost:8080/api/users/${id}`)
      console.log('deleted')
    },
  },

  mounted() {
    axios.get('http://localhost:8080/api/users')
      .then(response => this.users = response.data)
  }
}
</script>
