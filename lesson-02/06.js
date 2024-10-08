let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassport = structuredClone(passportWithAddress);
newPassport.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city);
console.log(newPassport.address.city);