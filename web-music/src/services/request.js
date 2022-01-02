import { BASE_URL, TIMEOUT} from "./config";
import axios from 'axios'
 const instance = axios.create({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})
// instance.interceptors.response.use(
//   res=>console.log('拦截响应',res),
//   err=>console.log('错误：',err)
//   )
// instance.interceptors.request.use(
//   res=>console.log('拦截响应',res),
//   err=>console.log('错误：',err)
//   )
export default instance