// const skills: string[] = ["Dev", "DevOps", "Testing"];
//
// for (const skill of skills) {
//   console.log(skill.toLowerCase());
// }
//
// const res = skills
//   .filter((s: string) => s !== "DevOps")
//   .map((s) => {
//     return test;
//   })
//   .reduce((a, b) => a + b);
//
// console.log(res);

const skill: readonly [number, string] = [1, "Dev"];
// const [id, skillName] = skill;
// const arr: [number, string, ...boolean[]] = [test, "sdf", true, true, false];

const skills: ReadonlyArray<string> = ["Dev", "DevOps"];
