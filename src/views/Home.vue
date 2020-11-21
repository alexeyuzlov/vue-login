<template>
  <div class="home">
    <h1>Home page</h1>

    <button v-if="authState.loggedIn" type="button" @click="logout">Logout</button>

    <div v-if="!authState.loggedIn">
      <p>You are not logged in. Do you want <router-link to="/login">login</router-link>?</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authState } from '@/auth';

@Component({
  components: {},
})
export default class Home extends Vue {
  authState = authState;

  logout() {
    localStorage.removeItem('token');
    authState.loggedIn = false;
  }
}
</script>
