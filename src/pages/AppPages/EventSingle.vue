<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>GitHubDemo</h6>
    </q-banner>
    <div class="row">
      <q-table
        title="GitHub Data"
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </div>
  </div>
</template>
<script lang="ts">
   import { defineComponent } from '@vue/composition-api';
    import axios from 'axios';
    type rowType = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
let rows = ref([] as rowType[]);
 export default defineComponent({
  name :'FetchAllRepos',
  props: {
    repoList: String,
    debugMessage : String
  },
  methods:{
     async fetchData(){
     console.log();
        let res = await axios.get('http://localhost:3000/listrepos');
        const rList = res.data as rowType[];
 const resList = rList.map((row) => {
    const mappedRow: rowType = {
      id: row.id,
      name: row.name,
      full_name: row.full_name,
      private: row.private,
      visibility: row.visibility,
      forks: row.forks,
      open_issues: row.open_issues,
      watchers: row.watchers,
      default_branch: row.default_branch,
    };
    return mappedRow;
      });
        rows.value = [];
  rows.value = resList;
    }
  },
  created(){
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.fetchData();
  }
});
  </script>
<style scoped>
</style>
