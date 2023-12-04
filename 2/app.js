"use strict";
function getFullName(userEntity) {
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
};
console.log(getFullName(user));
