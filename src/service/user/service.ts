import Service from "@/service/index";

class UserService extends Service {
  getUsers() {
    return this.http.get("/user/list");
  }
}

export default new UserService();
