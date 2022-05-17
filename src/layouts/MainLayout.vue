<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
        Vishnu Prasad Photography
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api';
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
 {
    title: 'Home',
    caption : 'Home page',
    icon:'home',
    link:'#/home'
  },
 {
    title: 'Image Gallery',
    caption: 'All photos taken by Vishnu Prasad',
    icon: 'photo',
    link: '#/imagegallery'
  },
{
    title: 'Photography Packages',
    caption: 'Rates for various photography packages',
    icon: 'work',
    link: '#/photopackages'
  },
   {
    title: 'Travel Blog',
    caption: '@vishnuKottarakara',
    icon: 'flight',
    link: '#/photoblog'
  },
   {
    title: 'Instagram',
    caption: '@vishnuKottarakara',
    icon: 'instagram',
    link: 'https://www.instagram.com/vishnukottarakara/'
  },
  {
    title: 'Contact Me',
    caption: 'Contact Details',
    icon: 'phone',
    link: '#/contact'
  }
];

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return {leftDrawerOpen, essentialLinks}
  }
});

</script>
