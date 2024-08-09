import Service from "@/service/index";

class UserService extends Service {
  getUserList() {
    return this.http.get("/user/list");
  }
}

export default new UserService();
