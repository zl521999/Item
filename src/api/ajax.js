import axios from "axios"

export default function ajax(url,data={},type="GET") {
  
  return new Promise((resolve,reject)=>{

    let promise
    //异步的请求--判断发送请求的方式
    if(type==="GET"){//get请求
      promise=axios.get(url,{
        params:data
      })
    }else{//post请求
      promise=axios.post(url,data)
    }

    
    promise.then(response=>{
      //请求成功
      resolve(response.data)


    }).catch(error=>{
      //请求出错---统一提示错误
      alert("请求出错："+error.message)

    })



  })



}