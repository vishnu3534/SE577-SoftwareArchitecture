<template>
  <div id="projectStack">
    <AboutCardWitHyperlinkComponent
      child-class="bg-warning"
      title="Wedding Photography"
      link="#/phototypes"
    />
    <AboutCardWitHyperlinkComponent
      child-class="bg-primary"
      title="Wedding Photography + Video"
      link="#/photoyear"
    />
    <AboutCardWitHyperlinkComponent
      child-class="bg-warning"
      title="Ecomimic Package"
      link="#/photoyear"
    />
    <AboutCardWitHyperlinkComponent
      child-class="bg-primary"
      title="Bundle Package"
      link="#/photoyear"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AboutCardWitHyperlinkComponent from '../../components/Card/CardWithTextComponent.vue';
export default defineComponent({
  name: 'myProjects',
  components: { AboutCardWitHyperlinkComponent },
});
</script>
