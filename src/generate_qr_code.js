const speakeasy = require("speakeasy");
const QRcode = require("qrcode");

const secret = speakeasy.generateSecret({
  length: 20,
  name: "MyApp:YourName",
  issuer: "MyApp",
  period: 30, //default 값(30초)
});

console.log("secret", secret);

function generateQRCodeURL() {
  return new Promise((res, rej) => {
    QRcode.toDataURL(secret.otpauth_url, (err, dataURL) => {
      if (err) {
        rej(err);
      } else {
        res(dataURL);
      }
    });
  });
}

generateQRCodeURL()
  .then((dataURL) => {
    console.log(`scan the qr code with the google autheticator app`);
    console.log(dataURL);
  })
  .catch((err) => {
    console.error(`Error when generating QR code : `, err);
  });
