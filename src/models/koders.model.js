const yup = require("yup");
/*
  koder
  - firstName
  - lastName
  - age
  - email
  - phone
*/

const koderAttributes = ["firstName", "lastName", "age", "email", "phone"];

// version sin yup
// function Koder(data) {
//   koderAttributes.forEach((attr) => {
//     if (!data[attr]) {
//       throw new Error(`Missing ${attr} attribute`);
//     }
//   });

//   if (data.age < 18) {
//     throw new Error("Koder must be at least 18 years old");
//   }

//   const emailRegex = /.+@.+\..+/;
//   if (!emailRegex.test(data.email)) {
//     throw new Error("Invalid email");
//   }

//   return {
//     firstName: data.firstName,
//     lastName: data.lastName,
//     age: data.age,
//     email: data.email,
//     phone: data.phone,
//   };
// }

// version con yup
function Koder(data) {
  const schema = yup.object({
    id: yup.string(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().min(18).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(10).max(10).required(),
  });

  const koder = schema.cast(data);
  schema.validateSync(koder);

  return koder;
}

module.exports = Koder;
