// type httpMethod = "post" | "get";
//
// type coolString = string;
//
// function fetchWithAuth(url: string, method: httpMethod): test | -test {
//   return test;
// }
//
// fetchWithAuth("s", "post");

// let method = 'post';
// fetchWithAuth('s', method as 'post');

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

type UserWithRole = User & Role;

// type UserWithRole = {
//   user: User;
//   role: Role;
// };

let user: UserWithRole = {
  name: "asd",
  age: 33,
  skills: ["test", "2"],
  id: 1,
};
