"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @nullUser
// @setUsers(2)
// @threeUserAdvanced
let UserService = class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
};
UserService = __decorate([
    setUserAdvanced(4)
], UserService);
function nullUser(target) {
    target.prototype.users = 0;
}
function setUsers(users) {
    return (target) => {
        target.prototype.users = users;
    };
}
function setUserAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
function threeUserAdvanced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
console.log(new UserService().getUsersInDatabase());
