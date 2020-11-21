<template>
  <div class="login">
    <h1>Sign In</h1>

    <form @submit="submit">
      <div>
        <label>Email</label>
        <input v-model="credentials.email" type="text"/>
      </div>

      <div>
        <label>Password</label>
        <input v-model="credentials.password" type="password"/>
      </div>

      <button type="submit" :disabled="loading">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authState } from '@/auth';

@Component
export default class Login extends Vue {
  private credentials = {
    email: 'sample@dev.com',
    password: 'secret'
  };

  public loading = false;

  submit(e: Event) {
    e.preventDefault();

    this.loading = true;

    setTimeout(() => {
      if (this.credentials.email === 'sample@dev.com' && this.credentials.password === 'secret') {
        authState.loggedIn = true;
        localStorage.setItem('token', '12345');
        this.$router.push({path: '/'});
      }
    }, 2000);
  }
}
</script>
