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
export default {
  name: 'GitHubPage',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
type rowType = {
  id: string;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  git_url: string;
  watchers: number;
  default_branch: string;
};
let rows = ref([] as rowType[]);

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/listrepos');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  rows.value = [];
  const rList = res.data as rowType[];
  const resList = rList.map((row) => {
    const mappedRow: rowType = {
      id: row.id,
      node_id: row.node_id,
      name: row.name,
      full_name:row.full_name,
      html_url: row.html_url,
      git_url: row.git_url,
      watchers: row.watchers,
      default_branch: row.default_branch,
    };
    return mappedRow;
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  rows.value = resList;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
