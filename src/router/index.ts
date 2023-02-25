import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { useAuthStore } from '@/stores/auth'

import UsersView from '@/views/UsersView.vue'
import UserDetailsView from '@/views/UserDetails.vue'
import AddUserView from '@/views/AddUser.vue'
import UserEditView from '@/views/UserEdit.vue'

import EventsView from '@/views/EventsView.vue'
import EventDetailsView from '@/views/EventDetails.vue'
import AddEventView from '@/views/AddEvent.vue'
import EventEditView from '@/views/EventEdit.vue'

import TicketsView from '@/views/TicketsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/events/add',
      name: 'addevent',
      component: AddEventView
    },
    {
      path: '/events/:id',
      name: 'eventdetails',
      component: EventDetailsView
    },
    {
      path: '/events/edit/:id',
      name: 'eventedit',
      component: EventEditView
    },
    {
      path: '/users/edit/:id',
      name: 'useredit',
      component: UserEditView
    },
    {
      path: '/users/:id',
      name: 'userdetails',
      component: UserDetailsView
    },
    {
      path: '/users/add',
      name: 'adduser',
      component: AddUserView
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsView
    }
  ]
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login','/register'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }
});


export default router
