let engine= {cylinders: 8}
let sports_doors= {doors: 2}
// let prosche= {
//     fuel: "XP95",
//     __proto__:engine,
//     __proto1__:sports_doors
// }s
// console.log('ho',prosche.cylinders)

let prosche={
    fuel:"XP95"
}
Object.setPrototypeOf(prosche,engine)
console.log(Object.getPrototypeOf(prosche));
console.log(prosche.cylinders)

console.log(prosche.hasOwnProperty("cylinders"));
