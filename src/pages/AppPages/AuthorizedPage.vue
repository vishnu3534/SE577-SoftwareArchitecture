<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Public and Secret gists listed below</h1>
          <h2 class="subtitle">using Vue JS, GITHUB API &amp; Quasar</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Public</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo.id">
              <td>{{ repo.id }}</td>
              <td>{{ repo.description }}</td>
              <td>{{ repo.html_url }}</td>
              <td>{{ repo.public }}</td>
              <td>{{ repo.owner.login }}</td>
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
      .get('https://api.github.com/users/' + gitcred.gitusername + '/gists', {
        headers: {
          authorization:
            'Basic ' + btoa(gitcred.gitusername + ':' + gitcred.gitaccesstoken),
        },
      })
      .then((response) => {
        this.repos = response.data;
        console.log(this.repos);
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
