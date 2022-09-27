// SUS SET()
// let uniq = new Set();
// let arr = [];
// data.data.SalesOrderLines.forEach((el) => {
//   for (const key in el.fields.Product) {
//     id = el.fields.Product[key].name;
//     arr.push(id);
//     uniq.add(id);
//   }
// });
// console.log(arr);
// console.log("UNIQ arr:", Array.from(uniq));

// SUS FILTER()
// let arr2 = arr.filter(function (element, index, array) {
//   console.log(element, "elemtn");
//   console.log(index, "index");
//   //   console.log(array, "array");

//   return array.indexOf(element) == index;
// });

//SUS OBEKT()

let arr = [];
let obj = {};
data.data.SalesOrderLines.forEach((el) => {
  for (const key in el.fields.Product) {
    id = el.fields.Product[key].name;
    console.log(id);
    obj[id];
    console.log(obj[id]);
    if (typeof obj[id] === "undefined") {
      obj[id];
      arr.push(obj[id]);
    }
  }
});

// // console.log(arr);
// // var a = [0, 0, 1, 2, 3];
// // var b = {};
// //     a.forEach(function (item) {
// //   b[item] = 1;
// //     });

// let temp = {};
