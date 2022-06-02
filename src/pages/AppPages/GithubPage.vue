<template>
  <div class="mb-6">
    <section class="hero is-medium is-primary is-bold mb-6">
      <div class="hero-body">
        <div class="container">
          <h3 class="title">Click on the below buttons to list the gists</h3>
          <button id="Authorized" type="button" @click="Authorized()">
            Authorized
          </button>
          <button id="Authorized" type="button" @click="Unauthorized()">
            Unauthorized
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
  },
};
</script>
