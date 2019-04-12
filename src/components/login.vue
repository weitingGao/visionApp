<template>
  <div id="login">
     <div class="login_form">
        <p class="login_title">登录</p>
        <div class="input_form">
            <input  placeholder="你的账号(仅支持手机号)" v-model.number="phone" maxlength="11" type="tel" oninput="value=value.replace(/[^\d]/g,'')">
            <input  placeholder="你的密码" v-model="password">
        </div>
        <mt-button class="login_btn" size="large" @click="tologin()">登录</mt-button>
        <div class="login_tip">
          <p class="account_tip">还没有账号?</p>
          <p class="register_tip"><router-link to="/register">注册</router-link></router></p>
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
            title: '登陆',
            phone:'',
            password:''
        }
    },
    methods:{
      tologin(){
        if(this.phone==""){
          MessageBox('提示', '请输入手机号');
        }else if(this.password==""){
          MessageBox('提示', '请输入密码');
        }else{
          if(this.phone==this.$store.state.nowUser.phone&&this.phone!==''){
            if(this.password==this.$store.state.nowUser.password&&this.password!==''){
              Toast('登录成功');
              this.$router.push('/index')
            }else{
              MessageBox('提示', '密码错误');
            }
          }else{
            MessageBox('提示', '无该用户信息，请注册');
          }
          
        }
      }
    }
  }
</script>
<style scoped lang="scss">

 @import "../style/login.scss";
</style>
