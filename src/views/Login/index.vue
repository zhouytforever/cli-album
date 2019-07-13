<template>
  <div class="main">
    <form @submit="onSubmit">
      <label for="email">Email</label>
      <input id="email" type="" name="email">
      <label for="passwd">密码</label>
      <input id="passwd" type="password" name="passwd">
      <button type="submit">提交</button>
      <button type="reset">重置</button>
    </form>
    <a class="regist" href="/regist">去注册</a>
  </div> 
</template>
<script>
import a from '@/utils/api'
export default {
  name: 'Login',
  data: function() {
    return {
      email: '',
      passwd: '',
    }
  },
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
