let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newObj = {...passport}
newObj.name = 'Ivan'
console.log(passport.name);
console.log(newObj.name);