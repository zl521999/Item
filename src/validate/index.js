import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    email:"邮箱",
    password:"密码"

  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },

  getMessage: field => field + '必须是11位手机号码'
})

VeeValidate.Validator.extend("email",{
  validate:value=>{
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)
  },

  getMessage:field=>field + '请输入正确的邮箱'

})

