var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Auth = /** @class */ (function () {
    function Auth(strategy) {
        this.strategy = strategy;
    }
    Auth.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Auth.prototype.authUser = function (user) {
        return this.strategy.auth(user);
    };
    return Auth;
}());
var JWTStrategy = /** @class */ (function () {
    function JWTStrategy() {
    }
    JWTStrategy.prototype.auth = function (user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    };
    return JWTStrategy;
}());
var GithubStrategy = /** @class */ (function () {
    function GithubStrategy() {
    }
    GithubStrategy.prototype.auth = function (user) {
        if (user.githubToken) {
            // Идём в API
            return true;
        }
        return false;
    };
    return GithubStrategy;
}());
var user = new User();
user.jwtToken = "token";
var auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GithubStrategy());
console.log(auth.authUser(user));
