<template>
  <div id="projectStack">
    <AboutCardWitHyperlinkComponent
      child-class="bg-warning"
      title="Photos by Genre"
      link="#/PhotoTypes"
    />
    <AboutCardWitHyperlinkComponent
      child-class="bg-primary"
      title="Potos by year"
      link="#/PhotoYear"
    />
    <AboutCardWitHyperlinkComponent
      child-class="bg-warning"
      title="Photos by country"
      link="#/PhotoByCountry"
    />
    <AboutCardWitHyperlinkComponent
      child-class="bg-primary"
      title="Award winning photos"
      link="#/AwardPhotos"
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
