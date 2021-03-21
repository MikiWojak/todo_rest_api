
<template>
  <div class="login-form">
    <h2 class="login-heading">Login</h2>
    <form>

      <div class="form-control">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="username" class="login-input">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input">
      </div>

      <div class="form-control">
        <button class="btn-submit">Login</button>
      </div>

    </form>
  </div>
</template>

<style>
    .login-form {
        max-width: 600px;
        margin: 0 auto;
    }
</style>