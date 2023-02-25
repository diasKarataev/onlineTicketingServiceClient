import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
      token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')!) : null,
      returnUrl: '/'
    }
  },
  actions: {
    async login(email: string, password: string) {
      const response = await fetch('http://localhost:8080/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.status === 200) {
        const token = await response.text();
        localStorage.setItem('user', JSON.stringify(email));
        localStorage.setItem('token', JSON.stringify(token));
        this.user = email;
        this.token = token;
        router.push(this.returnUrl || '/');
      } else {
        throw new Error('Invalid credentials');
      }

    },
    async register(email: string, password: string, name: string, surname: string) {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name, surname })
      });

      if (response.status === 200) {
        router.push(this.returnUrl || '/login');
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout() {
      this.user = '';
      this.token = '';
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      router.push('/login');
    }
  }
});
