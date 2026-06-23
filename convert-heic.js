const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  try {
    const inputBuffer = fs.readFileSync('D:\\LandingPage\\nova-capa.heic');
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 1
    });
    fs.writeFileSync('D:\\LandingPage\\conexaolink\\public\\nova-capa.jpg', outputBuffer);
    console.log('SUCCESS');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
