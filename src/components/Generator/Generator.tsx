import QRCode from "react-qr-code";
import { useState, useRef } from "react";
import generatorStyles from "../Generator/Generator.module.css";
import buttonStyles from "../Button/Button.module.css";
import QRmenu from "../QRmenu/QRmenu.tsx";

import Button from "../Button/Button.tsx";

function Generator() {
  const [url, setUrl] = useState("https://example.com");
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(200);
  const [qr, setQr] = useState("");

  function generateQRcode() {
    QRCode.toDataURL();
  }

  return (
    <main className={generatorStyles.generator}>
      <QRmenu />
      <div className={generatorStyles.input__wrapper}>
        <input
          className={generatorStyles.generator__input}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className={buttonStyles.button} onClick={generateQRcode}>
          Generate
        </Button>
      </div>
      <div className={generatorStyles.qrcode__wrapper}>
        <QRCode
          value={url} // The URL to encode
          bgColor={back} // Background color
          fgColor={fore} // Foreground color
          size={size} // Size in pixels
          level="H" // Error correction level (L, M, Q, H)
        />
        <div className="qrcode__inputs">
          <input
            type="color"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
          <input
            type="color"
            value={fore}
            onChange={(e) => setFore(e.target.value)}
          />
        </div>
        <Button variant="contained" href={qr} download="qrcode.png">
          Download
        </Button>
      </div>
    </main>
  );
}

export default Generator;
