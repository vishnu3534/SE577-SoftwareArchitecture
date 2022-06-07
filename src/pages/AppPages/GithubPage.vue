<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div class="container">
          <h3 class="title">Click on the below buttons to list the gists</h3>
          <button id="Authorized" type="button" @click="Authorized()">
            Authorized
          </button>
          <p class="vs"></p>
          <button id="Authorized" type="button" @click="Unauthorized()">
            Unauthorized
          </button>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h3 class="title">
            Click on the below buttons to list the git repos
          </h3>
          <button id="Git Repos" type="button" @click="Gitrepos()">
            Git Repos
          </button>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h3 class="title">
            Click on the below button to list the git branches
          </h3>
          <button id="Git Branches" type="button" @click="Gitbranches()">
            Git Branches
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    Authorized() {
      this.$router.push('/auth');
    },
    Unauthorized() {
      this.$router.push('/Unauth');
    },
    Gitrepos() {
      this.$router.push('/authrepos');
    },
    Gitbranches() {
      this.$router.push('/authbranches');
    },
  },
};
</script>
