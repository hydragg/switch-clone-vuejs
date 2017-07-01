import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Twitch from '@/pages/Twitch';
import streams from '@/pages/streams';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Twitch',
      name: 'Twitch',
      component: Twitch,
    },
    {
      path: '/games/:name',
      name: 'game',
      component: streams,
    },
    { path: '/*', redirect: '/Twitch' }
  ],
});
