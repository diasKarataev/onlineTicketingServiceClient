import { defineStore } from 'pinia';
import router from '@/router';


export const useEventsStore = defineStore({
    id: 'events',
    state: () => {
      return {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
        token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')!) : null,
        returnUrl: '/'
      }
    },
    actions: {
      async getEvents(title: string, description : string, capacity: number) {
        const response = await fetch('http://localhost:8080/api/events', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title,description, capacity })
        });
  
        if (response.status === 200) {
          const token = await response.text();
          router.push(this.returnUrl || '/events');
        } else {
          throw new Error('Forbiden');
        }
  
      }
    //   async addEvent(email: string, password: string, name: string, surname: string) {
    //     const response = await fetch('http://localhost:8080/auth/register', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ email, password, name, surname })
    //     });
  
    //     if (response.status === 200) {
    //       router.push(this.returnUrl || '/login');
    //     } else {
    //       throw new Error('Invalid credentials');
    //     }
    //   }
    }
  });