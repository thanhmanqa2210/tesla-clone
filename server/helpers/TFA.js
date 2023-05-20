const qrcode = require("qrcode");
const otplib = require("otplib");

const { authenticator } = otplib;

const generateUniqueSecret = () => {
  return authenticator.generateSecret();
};
const generateOTPToken = (username, serviceName, secret) => {
  return authenticator.keyuri(username, serviceName, secret);
};

const verifyOTPToken = (token, secret) => {
  return authenticator.verify({ token, secret });
};

const generateQRCode = async (otpAuth) => {
  try {
    const QRCodeImgUrl = await qrcode.toDataURL(otpAuth);
    return (
      <>
        `
        <img src="${QRCodeImgUrl}" alt="qr-code-img-trungquandev" />`
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export {
  generateUniqueSecret,
  verifyOTPToken,
  generateOTPToken,
  generateQRCode,
};
