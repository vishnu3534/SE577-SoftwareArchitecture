<template>
  <body>
    <div id="AppWelcome" class="center">
      <h4>Welcome to GitHub Interface App</h4>
    </div>
    <div id="AppWelcome" class="left">
      <p>
        The Git Interface App is used to interact with Github via a User
        Interface. Requests from UI will be routed to various microservices
        which inturn invoke the correspoding github apis and return the values
        to UI. Then UI formats the return values from the microservices running
        on docker container and displays it as webpages.
      </p>
    </div>
    <div id="AppWelcome" class="left">
      <h6 class="title">
        Click on the Github link on top of the page to see more options!
      </h6>
    </div>
  </body>
</template>
<style>
div.center {
  text-align: center;
}
div.left {
  text-align: left;
}
</style>
