// interface User {
//   name: string;
// }
//
// interface User {
//   age: number;
// }
//
// const user: User = {
//   name: "as",
//   age: 33,
// };

// type ID = string | number;
//
// interface IDI {
//   ID: string | number;
// }

interface User {
  // так же с type
  login: string;
  password?: string;
}

const user: User = {
  login: "a@a.ru",
  password: "test",
};

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
multiply(5);

interface UserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multiply(5);
}
