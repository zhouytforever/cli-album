<template>
  <div class="main">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="QQ：" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passwd">
        <el-input v-model="form.passwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="验证码（QQ邮箱查收）：" prop="validCode">
        <el-input v-model="form.validCode"></el-input>
      </el-form-item>
      <el-from-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-from-item>
    </el-form>
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
