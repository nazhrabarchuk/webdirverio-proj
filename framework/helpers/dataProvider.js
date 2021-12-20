// import * from "faker";

import Randomstring from "randomstring";

async function randomData() {
    return Randomstring.generate({
        charset: 'alphabetic',
        length: 7,
        capitalization: 'lowercase'
    })
}

const ADDRESS_DATA = {
    country: 'Country',
    name: 'Name',
    mobileNumber: 1234567,
    zip: 'zip',
    address: 'Address',
    city: 'City',
    state: 'State'
}
const CARD_DATA = {
    name: 'Name 1',
    number: 1234567891234567,
    month: 1,
    year: 2080
}
const REGISTRATION_DATA = {
    email: `${await randomData()}@test.com`,
    pass: await randomData(),
    securityQuestion: "Mother\'s maiden name?",
    securityAnswer: "Mothers name"
}

export {
    ADDRESS_DATA,
    CARD_DATA,
    REGISTRATION_DATA,
    randomData
};