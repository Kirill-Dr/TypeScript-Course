"use strict";
/*
    Необходимо написать функцию группировки, которая принимает массив объектов
    и его ключ, производит группировку по указанному ключу и возращает
    сгруппированный объект.
    Пример:
    '[
        { group: 1, name: 'a' },
        { group: 2, name: 'b' },
        { group: 3, name: 'c' },
    ];

    При группировке по 'group' ---->

    {
    '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
    '2': [ { group: 2, name: 'c' } ]
    }
*/
const data = [
    { group: 1, name: "a" },
    { group: 1, name: "b" },
    { group: 2, name: "c" },
];
function group(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res = group(data, "group");
console.log(res);
