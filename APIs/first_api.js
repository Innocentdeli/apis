// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//   qs: {lon: '38.5', lat: '-78.5'},
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });

// let fullName = "john";
// let age = 34;
// module.exports.mand = {
//   fullName,
//   age
// }

// module.exports = fullName;


const os = require('os');
const user = os.userInfo();
console.log(user)
console.log(os.uptime());