<template>
  <el-row type="flex" justify="center" align="middle">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <img
        class="imgShadow"
        src="https://hbimg.huabanimg.com/322e523731a5022eed6c9da7a573ddee230d06b11bc5-lQSMDi_fw658"
        alt
      />
      <el-form-item label="账户" prop="account">
        <el-input type="text" v-model="ruleForm2.account" placeholder="admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" placeholder="123"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      ruleForm2: {
        pass: "",
        account: ""
      },
      rules2: {
        pass: [{required: true, message: '请输入您的密码'}],
        account: [{ required: true, message: '请输入您的用户名'}]
      }
    };
  },
  
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            if(this[formName].account != "admin" && this[formName].pass != "123"){
                this.$alert('用户名或密码错误了哦~')
            }else{
                // this.$store.dispatch('getIsLogin')
                sessionStorage.setItem("user", "admin")
                this.$router.push({ path: "/" });  
            }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.el-row {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 150px;
}
.imgShadow {
  width: 70px;
  border-radius: 50%;
  margin: 10px 10px 20px 100px;
  box-shadow: 0 0 15px 5px #ddd;
}
</style>