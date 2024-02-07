const date = new Date("2023-02-06T18:00:00Z");

// const [year, month, day, hour, minute, second] = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
// console.log({year, month, day, hour, minute, second});


const [year, month, day, hour, minute, second] = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()];
console.log({year, month, day, hour, minute, second});










// const today = new Date();

// console.log(today.toString());

// const localToady = new Date(2023, 0, 23, 4, 20, 30 ); // month is zero index
// console.log(localToady);


// const formattedDate = (date) => {
//     const padZero = (num) =>  num < 10 ? `0${num}` : `${num}`;

//     const YYYY = date.getFullYear().toString();
//     const MM = padZero(date.getMonth() + 1)
//     const DD = padZero(date.getDate());

//     const hh = padZero(date.getHours());
//     const mm = padZero(date.getMinutes());
//     const ss = padZero(date.getSeconds())

//     return `${YYYY} ${MM} ${DD} ${hh} ${mm} ${ss}`;
// }

// console.log(formattedDate(new Date()))