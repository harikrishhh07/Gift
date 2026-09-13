const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const targetUrl = 'https://gift-ochre-two.vercel.app';
const publicDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate PNG with Gold (#D4AF37) modules and Dark (#070709) background
QRCode.toFile(
  path.join(publicDir, 'qr-code.png'),
  targetUrl,
  {
    errorCorrectionLevel: 'H',
    type: 'png',
    quality: 1.0,
    margin: 2,
    width: 800,
    color: {
      dark: '#D4AF37',   // Gold QR modules
      light: '#070709',  // Deep luxury dark background
    }
  },
  function (err) {
    if (err) throw err;
    console.log('Customized Gold PNG QR Code generated successfully at public/images/qr-code.png');
  }
);

// Generate SVG version
QRCode.toString(
  targetUrl,
  {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#D4AF37',
      light: '#070709',
    }
  },
  function (err, string) {
    if (err) throw err;
    fs.writeFileSync(path.join(publicDir, 'qr-code.svg'), string);
    console.log('Customized Gold SVG QR Code generated successfully at public/images/qr-code.svg');
  }
);
