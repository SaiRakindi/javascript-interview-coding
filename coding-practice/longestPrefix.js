const longestCommonPrefix = (arr) => {
  let prefix = arr[0];

  for (let i = 0; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      console.log(arr[i].indexOf(prefix));
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") return `No common prefix`;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "floght"]));
