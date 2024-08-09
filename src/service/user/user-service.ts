import Service from "@/service/index";

class UserService extends Service {
  constructor() {
    super("https://impressed-tandie-jhfordeploy-9d06538a.koyeb.app/user"); // 기본 URL을 전달
  }
  getUsers() {
    return this.http.get("/list");
  }

  getUser(userId: number) {
    return this.http.get(`/${userId}`);
  }
}
export default new UserService();
