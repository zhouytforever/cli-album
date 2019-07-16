<template>
  <div class="main">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="QQ：" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passwd">
        <el-input v-model="form.passwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="邀请码（QQ邮箱查收）：" prop="invitCode">
        <el-input v-model="form.invitCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div> 
</template>
<script>
import a from './api'

export default {
  name: 'Login',
  data() {
    return {
      rules: {
      },
      form: {
        email: '',
        passwd: '',
        invitCode:  ''
      }
    }
  },
  methods: {
    async onSubmit() {
      console.log('表单内容', this.form)
      const result = await a.login(this.form)
      console.log(result.data)
    }
  }
}
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8vh;
}
</style>
