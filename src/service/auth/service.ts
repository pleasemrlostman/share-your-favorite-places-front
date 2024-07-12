import Service from "@/service/index";

class AuthService extends Service {
  updateUser(params: {}) {
    return this.http.post(`/auth/register`, params);
  }
}
export default new AuthService();
