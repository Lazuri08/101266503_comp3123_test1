
// Function to create a resolved promise
function resolvedPromise(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 500);
  });
}

// Function to create a rejected promise
function rejectedPromise(errorMessage) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(errorMessage));
    }, 500);
  });
}

// Call the promises separately and handle the results
resolvedPromise("Resolved Promise")
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

rejectedPromise("Rejected Promise")
  .then((result) => {
    // This block won't be executed since the promise is rejected
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
