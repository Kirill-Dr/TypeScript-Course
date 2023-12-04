"use strict";
class Controller {
    handleWithLogs(req) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() - error
const c = new UserController();
c.handleWithLogs("Request");
