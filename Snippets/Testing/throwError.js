var multiply = function(x, y) {
    // If either x or y is not a number, throw an error
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Either x or y is not a number. Please try again with numbers.");
    }
    // Otherwise return the result of x * y
    else return x * y;
  };