function runTransaction(transaction: { fromTo: [string, string] }) {
  console.log(transaction);
}

const transaction: GetFirstArg<typeof runTransaction> = {
  fromTo: ["test", "2"],
};

runTransaction(transaction);

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;
