import Service from "@/service/index";

type userRegister = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

class authService extends Service {
  updateUser(params: {}) {
    return this.http.post<userRegister[]>(`/auth/register`, params);
  }
}

const AuthService = new authService();

export default AuthService;
