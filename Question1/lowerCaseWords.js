function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject(new Error("Input has to be an array"));
      } else {
        const words = arr.filter((item) => typeof item === "string");
        const lowercasedWords = words.map((word) => word.toLowerCase());
        resolve(lowercasedWords);
      }
    });
  }
  
  // Example part:
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  lowerCaseWords(mixedArray)
    .then((result) => {
      console.log("Lowercased words:", result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  