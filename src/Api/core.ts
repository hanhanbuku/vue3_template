import { NcRequest } from "@itachi3/ncaxios"

const request = new NcRequest({
  base: {
    baseURL: "http://127.0.0.1:5173",
    headers: {
      "Content-Type": "application/json",
    },
  },
  interceptReqSuccess: (config) => {
    return config
  },
  interceptReqError: (err) => {
    console.log(err, "请求错误信息")
    return Promise.reject(err)
  },
  interceptResSuccess: (response) => {
    return response
  },
  interceptResError: (err) => {
    return Promise.reject(err)
  },
})

export default request
