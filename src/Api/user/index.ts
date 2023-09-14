import request from "@/Api/core"

/**
 * 登录
 */
export const login = (data: any) => {
  return request.post("/api/user/login", data, { loading: true })
}
