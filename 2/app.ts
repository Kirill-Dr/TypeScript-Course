function getFullName(userEntity: {
  firstname: string;
  surname: string;
}): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

// const getFullNameArrow = (firstname: string, surname: string): string => {
//   return `${firstname} ${surname}`;
// };

const user = {
  firstname: "Антон",
  surname: "Иванович",
  city: "Москва",
  age: 36,
  skills: {
    dev: true,
    devops: true,
  },
};

console.log(getFullName(user));
