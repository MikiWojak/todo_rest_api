  
<template>
  <div class="login-form">
    <h2 class="login-heading">Register</h2>
    <form>

      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="login-input">
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="login-input">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input">
      </div>

      <div class="form-control">
        <button class="btn-submit">Create Account</button>
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