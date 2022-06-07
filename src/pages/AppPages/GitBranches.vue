<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div class="container">
          <h4 class="title">All Git branches are listed below</h4>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Commit Url</th>
              <th>Protected</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo.name">
              <td>{{ repo.name }}</td>
              <td>{{ repo.commit.url }}</td>
              <td>{{ repo.protected }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import gitcred from 'src/propertyConfig/config';

export default {
  name: 'RepositoryWord',
  data() {
    return {
      repos: null,
    };
  },
  created: function () {
    axios
      .get(
        'http://localhost:3000/authorizedbranches/' +
          gitcred.gitusername +
          '/' +
          gitcred.gitaccesstoken +
          '/' +
          gitcred.gitrepo
      )
      .then((response) => {
        this.repos = response.data;
      });
  },
};
</script>

<style>
body {
  font: 15px/1.8 'Poppins', sans-serif !important;
}
.table td,
.table th {
  padding: 20px !important;
}
</style>
