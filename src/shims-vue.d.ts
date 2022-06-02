/* eslint-disable */

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import Vue from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'uuid';
