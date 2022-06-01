import axios from 'axios'
import config from '../config/index'

//判断当前的运行环境
const baseUrl = process.env.NODE_ENV === 'development'? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest{
  constructor(baseUrl){
    this.baseUrl =baseUrl
  }
  getInsideConfig(){
    const config ={
      baseUrl:this.baseUrl,
      header:{}
    }
    return config
  }
  interceptors(instance){
    //添加拦截器
    instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
  }
  request(options){
    const instance = axios.create()
    options = {...this.getInsideConfig(),...options}
    this.interceptors(instance)
    return instance(options)
  }
}
export default new HttpRequest(baseUrl)