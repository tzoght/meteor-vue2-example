<template>
<div class="app">
  <div v-blaze="'loginButtons'"></div>
  <Navigation></Navigation>
  <p v-if="user">
    You are logged in as <b>{{ user.username }}</b>.
  </p>
  <router-view/>
</div>
</template>

<script>
    import Navigation from './pages/Navigation';
    export default {
        name: 'app',
        data() {
            return {
                user: null,
            }
        },
        components: {
            'Navigation': Navigation
        },
        meteor: {
            data: {
                user () {
                    return Meteor.user()
                },
            }
        }
    }
</script>

<style>
body {
  margin: 30px;
}

a {
  color: #40b883;
  text-decoration: none;
}

h1, h2 {
  font-weight: normal;
}
</style>
