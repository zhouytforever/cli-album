<template>
  <div class="main">
    <form action="" @submit="onSubmit">
      <label for="email">Email</label>
      <input id="email" type="" name="email">
      <label for="passwd">密码</label>
      <input id="passwd" type="password" name="passwd">
      <label for="passwd">确认密码</label>
      <input id="passwd" type="password" name="passwd">
      <label for="code">验证码</label>
      <input id="code" type="" name="code">
      <a class="send-valid-code" @click="onSendCode"></a>
      <button type="submit">提交</button>
      <button type="reset">重置</button>
    </form>
  </div> 
</template>
<script>
import a from '@/utils/api'
export default {
  name: 'Login',
  methods: {
    onSubmit(params) {
      console.log(params)
      console.log(a);
    }
  }
}
</script>
<style scoped>
</style>
