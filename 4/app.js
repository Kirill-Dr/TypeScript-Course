"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "платёж успешен",
    statusCode: StatusCode.SUCCESS,
};
// 1 - успех
// 2 - в процессе
// 3 - отклонён
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
function compute() {
    return 3;
}
const res2 = 1 /* Roles.ADMIN */;
// enum Roles {
//   ADMIN = 1,
//   USER = compute(),
// }
// function test(x: { ADMIN: number }) {}
//
// test(Roles);
