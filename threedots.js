const ages = [23, 34, 65, 23, 34, 23, 56]
const ages2 = [34, 23, 76, 34, 46, 65, 23]
const ages3 = [23, 34, 12, 23]
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
//console.log(allAges2);
const business = 456;
const minister = 324;
const sochib = 234;
const takaPoisa = [456, 324, 234]
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);
