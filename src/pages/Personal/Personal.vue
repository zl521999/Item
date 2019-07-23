<template>
  <div id="Personal">
    <PersonalHeader/>
    
    <LoginHome  :toLoginPhone="toLoginPhone" :toLoginEmail="toLoginEmail" v-show="!isLoginPhone && !isLoginEmail"/>
    <LoginPhone v-show="isLoginPhone" :toLoginPhone="toLoginPhone"/>
    <LoginEmail v-show="isLoginEmail" :toLoginEmail="toLoginEmail"/>
    
  </div>
</template>

<script type="text/ecmascript-6">

import LoginPhone from "./PersonalLogin/phoneLogin"
import LoginEmail from "./PersonalLogin/emailLogin"
import LoginHome from "./PersonalLogin/homeLogin"



import PersonalHeader from "../../components/PersonalHeader/PersonalHeader";

export default {

  data () {
    return {
        isLoginPhone:false,
        isLoginEmail:false
    }
  },
  
  components: {
    PersonalHeader,
    LoginPhone,
    LoginEmail,
    LoginHome
  },

  methods:{

    toLoginPhone(){
      this.isLoginPhone=!this.isLoginPhone
    },

    toLoginEmail(){
      this.isLoginEmail=!this.isLoginEmail
    }

  }
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

#Personal
  width 100%
  height 100%
  position relative

</style>
