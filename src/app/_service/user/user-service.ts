import Service from "@/app/_service/index";

class UserService extends Service {
  constructor() {
    super("https://impressed-tandie-jhfordeploy-9d06538a.koyeb.app/user"); // 기본 URL을 전달
  }
  getUsers() {
    return this.http.get("/list");
  }
}
export default new UserService();
