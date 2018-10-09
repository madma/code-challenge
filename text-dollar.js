function textDollar(n) {
  const numbersDict = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million"
  };

  //millions thousands hundreds tens

  if (n <= 20) return numbersDict[n];

  let digits = String(n).split("").reverse();
  // let size = digits.length;



  let numberStringArray = [];

  let currentChunk = 0;

  console.log("digits", digits);

  while (digits.length && currentChunk <= 2) {
    if (currentChunk == 1) numberStringArray.unshift("Thousand");
    if (currentChunk == 2) numberStringArray.unshift("Million");
    let chunk = digits.splice(0, 3).reverse();
    console.log("chunk: ", chunk);
    if (chunk.length == 3 && chunk[0] !== "0") {
      let ones = chunk[2] === "0" ? "" : numbersDict[chunk[2]];
      numberStringArray.unshift(ones);
      numberStringArray.unshift(numbersDict[chunk[1] + "0"]);
      numberStringArray.unshift(numbersDict[100]);
      numberStringArray.unshift(numbersDict[chunk[0]]);
    } else if (chunk.length == 2 && chunk[0] !=="0" && parseInt(chunk[0] + chunk[1]) > 20) {
      numberStringArray.unshift(numbersDict[chunk[1]]);
      numberStringArray.unshift(numbersDict[chunk[0] + "0"]);
    } else if (chunk.length == 2 && chunk[0] == "0") {
      numberStringArray.unshift(numbersDict[chunk[1]]);
    } else if (chunk.length == 1 && chunk[0] !== "0") {
      numberStringArray.unshift(numbersDict[chunk[0]]);
    }

    currentChunk++;
  }

  // TODO: refactor and control for some edge cases not captured in code above

  return numberStringArray.join("");
}


module.exports = textDollar;
