function logger(request, response, next) {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
  next();
}

// // clojures
// function logger(prefix) {
//   return (request, response, next) => {
//     console.log(
//       `${prefix} - [${new Date().toISOString()}] ${request.method} ${
//         request.url
//       }`
//     );
//     next();
//   };
// }

module.exports = logger;
