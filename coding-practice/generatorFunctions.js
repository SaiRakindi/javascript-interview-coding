// function* generatorExample(num) {
//   while (true) yield num++;
// }

// const genEx = generatorExample(1);
// // console.log(genEx.next().value);
// // console.log(genEx.next().done);

// for (let i = 0; i < 100; i++) {
//   console.log(genEx.next().value);
// }

function* genExample() {
  let num = 0;

  while (true) yield ++num;
}

let generatorEx = genExample();

for (let i = 0; i < 100; i++) {
  console.log(generatorEx.next().value);
}
