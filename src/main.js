// const generate_secret_key = require("./generate_secret_key");
// const secretKey = generate_secret_key();
// console.log(secretKey);

const verifyOTP = require("./verify");

const userOTP = "710386";

const verificationResult = verifyOTP(userOTP);

if (verificationResult) {
  console.log("OTP verification successful");
} else {
  console.log("OTP verification failed");
}
