<template>
  <div class="myCardWithHyperlinkDiv">
    <q-card flat class="my-card text-white" :class="childClass">
      <q-card-section>
        <div class="text-h6"><a :href="link">{{title}}</a></div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name :'AboutCardWitHyperlinkComponent',
  props: {
    childClass : String,
    title: String,
    link : String
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
