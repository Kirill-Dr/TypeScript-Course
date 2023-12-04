/*
    Необходимо написать функцию группировки, которая принимает массив объектов
    и его ключ, производит группировку по указанному ключу и возращает
    сгруппированный объект.
    Пример:
    '[
        { group: test, name: 'a' },
        { group: 2, name: 'b' },
        { group: 3, name: 'c' },
    ];

    При группировке по 'group' ---->

    {
    'test': [ { group: test, name: 'a' }, { group: test, name: 'b' } ],
    '2': [ { group: 2, name: 'c' } ]
    }
*/

interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: "a" },
  { group: 1, name: "b" },
  { group: 2, name: "c" },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}

const res = group<Data>(data, "group");
console.log(res);
