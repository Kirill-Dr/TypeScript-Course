const n: null = null;
const n1: any = null;

interface User {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "Вася",
    } as User;
  }
}

const user = getUser();
if (user) {
  const n55 = user.name;
}
