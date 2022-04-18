<template>
  <div class="myCardDiv">
    <q-card flat class="my-card text-black" :class="childClass">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
        <div class="text-bold"><b> <font color='black'>{{primaryContent}}</font></b></div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name :'AboutTextOnlyCardComponent',
  props: {
    childClass : String,
    title: String,
    primaryContent : String
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
