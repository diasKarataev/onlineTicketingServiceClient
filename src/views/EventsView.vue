<template>
  <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div  class="col" v-for="event in events" key="event.id">
                        <div class="card shadow-sm">
                            <div height="255">
                              <img src="https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg"
                              class="bd-placeholder-img card-img-top"
                              preserveAspectRatio="xMidYMid slice" focusable="false">
                            </div>
                            <div class="card-body">
                                <p>{{ event.title }} </p>
                                <b>{{ event.capacity }}</b> tickets left!
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                          <routerLink :to="`/events/${event.id}`" class="btn btn-sm btn-outline-secondary">View</routerLink>
                                          <routerLink :to="`/events/edit/${event.id}`" class="btn btn-sm btn-outline-secondary">Edit</routerLink>
                                    </div>
                                        <button class="btn btn-sm btn-outline-danger" @click="remove(event.id)">Delete</button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center"><button class="btn btn-outline-success" @click="$router.push('/events/add')">Add event</button> </div>
                
            </div>
            
    </div>
</template>
<script lang="ts">
import router from '@/router';
import axios from 'axios';


export default{
  data() {
    return {
      events: []
    }
  },
  methods: {
    async remove(id: string) {
        axios.delete(`http://localhost:8080/api/events/${id}`)
        console.log('deleted')
    },
  },

  mounted(){
    axios.get('http://localhost:8080/api/events')
    .then(response => this.events = response.data)
  }
}
</script>
