import Service from "@/service/index";

type userList = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

class userService extends Service {
  getUserList() {
    return this.http.get<userList[]>("/user/list");
  }
}

const UserService = new userService();

export default UserService;
