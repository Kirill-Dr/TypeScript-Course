enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILED,
}

const res = {
  message: "платёж успешен",
  statusCode: StatusCode.SUCCESS,
};

// test - успех
// 2 - в процессе
// 3 - отклонён

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);

function compute() {
  return 3;
}

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN;

// enum Roles {
//   ADMIN = test,
//   USER = compute(),
// }

// function test(x: { ADMIN: number }) {}
//
// test(Roles);
