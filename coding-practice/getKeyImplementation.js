const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

getKey(obj, "a.b.c"); //[1,2,3]
getKey(obj, "a.b.c.0"); // 1
getKey(obj, "a.b.c[1]"); //2
getKey(obj, ["a", "b", "c", "2"]); //3
getKey(obj, "a.b.c[3]"); //undefined
getKey(obj, "a.d", "SaiRakindi"); //SaiRakindi
    
function getKey(obj, keys, directString) {
  const splittedKeys = keys.split(".");

  for (let )
}
