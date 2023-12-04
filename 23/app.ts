class UserService {
  private static db: any;

  static async getUser(id: number) {
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    UserService.db;
  }

  static {
    UserService.db = "sdf";
  }
}

UserService.getUser(1);
const inst = new UserService(1);
inst.create();
