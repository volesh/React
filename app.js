var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    return User;
}());
var user = new User('Max', 18, 'male');
var sum = function (a, b) {
    return a + b;
};
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));
