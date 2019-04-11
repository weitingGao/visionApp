<template>
  <div id="register">
    <div class="goback">
      <router-link to="/"><img src="../assets/goback.png">返回</router-link>
    </div>
     <div class="login_form">
        <p class="login_title">注册</p>
        <div class="input_form">
            <input  placeholder="你的昵称" v-model="username">
            <input  placeholder="你的手机号码" v-model.number="phone" maxlength="11" type="tel">
            <input  placeholder="你的邮箱" v-model="email">
            <input  placeholder="你的密码" v-model="password">
            <input  placeholder="请确认你的密码" v-model="repassword">
            <input  placeholder="你的公司" v-model="school">
            <input  placeholder="你的职业" v-model="major">
            <mt-button class="login_btn" size="large" @click="toregister">注册</mt-button>
        </div>
        <div class="login_tip">
        </div>
     </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';

export default {
  data () {
    return {
      username:'',
      phone:'',
      email:'',
      password:'',
      repassword:'',
      school:'',
      major:''
    }
  },
  methods:{
    toregister:function(){
      if(this.username==""||this.phone==""||this.password==''||this.repassword==""){
        MessageBox('提示', '请填写完整表单');
      }else if(this.password!==this.repassword){
        MessageBox('提示', '两次密码不同');
      }else{
        Toast('注册成功');
      }
    }
  }
}
</script>
<style scoped lang="scss">
 @import "../style/register.scss";
</style>