<template>
  <div id="projectStack">
    <AboutCardWitHyperlinkComponent child-class="bg-warning" title='Photos by Genre' link="#/phototypes"/>
    <AboutCardWitHyperlinkComponent child-class="bg-primary" title='Potos by year' link="#/photoyear"/>
    <AboutCardWitHyperlinkComponent child-class="bg-warning" title='Photos by country' link="#/photobycountry"/>
    <AboutCardWitHyperlinkComponent child-class="bg-primary" title='Award winning photos' link="#/awardphotos"/>
    <AboutCardWitHyperlinkComponent child-class="bg-warning" title='Git repos' link="#/gitrepos"/>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import AboutCardWitHyperlinkComponent from '../../components/Card/cardWithHyperLinkComponent.vue';
export default defineComponent({
name : 'myProjects',
components : {AboutCardWitHyperlinkComponent},
});
</script>
