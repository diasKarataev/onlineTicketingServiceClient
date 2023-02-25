<template>
  <div class="album py-5 bg-light">
    <div class="container">
      
        <div class="col" v-for="ticket in tickets" key="ticket.id">
          <table class="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Ticket Id</th>
                <th scope="col">Event Id</th>
                <th scope="col">Event Title</th>
                <th scope="col">Seat Num</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ ticket.id }}</td>
                <td>{{ ticket.event.id }}</td>
                <td>{{ ticket.event.title }}</td>
                <td>{{ ticket.seatNum }}</td>
              </tr>
            </tbody>
          </table>

        </div>
        


    </div>

  </div>
</template>
<script lang="ts">
import router from '@/router';
import axios from 'axios';


export default {
  data() {
    return {
      tickets: []
    }
  },

  mounted() {
    axios.get('http://localhost:8080/api/tickets')
      .then(response => this.tickets = response.data)
  }
}
</script>
