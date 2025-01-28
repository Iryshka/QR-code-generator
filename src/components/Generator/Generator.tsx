import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react"; // Import QRCode from qrcode.react
import generatorStyles from "../Generator/Generator.module.css";
import buttonStyles from "../Button/Button.module.css";
import { ColorPicker } from "primereact/colorpicker";
import QRmenu from "../QRmenu/QRmenu.tsx";
import Button from "../Button/Button.tsx";
import RunningLine from "../RunningLine/RunningLine.tsx";

function Generator() {
  const [url, setUrl] = useState("");
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(200);

  // Ref to access the QRCodeSVG element
  const qrRef = useRef<SVGSVGElement | null>(null);

  function generateQRcode() {
    console.log("clicked");
    setGenerate(true);
  }
  function downloadQRcode() {
    const svgElement = qrRef.current;
    if (!svgElement) {
      alert("QR Code not found!");
      return;
    }

    // Serialize the SVG to string
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    // Convert SVG to Blob
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    // Load the image and draw it to canvas
    img.onload = () => {
      canvas.width = svgElement.clientWidth;
      canvas.height = svgElement.clientHeight;
      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qrcode.png";
      link.click();
    };

    img.src = url;
  }

  return (
    <main className={generatorStyles.generator}>
      <QRmenu />
      <div className={generatorStyles.input__wrapper}>
        <div className={generatorStyles.input__label}>
          <label htmlFor="link">Enter your URL</label>
          <input
            id="link"
            className={generatorStyles.generator__input}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
          />
        </div>
        <Button className={buttonStyles.button} onClick={generateQRcode}>
          Generate QR
        </Button>
      </div>
      <div className={generatorStyles.qrcode__wrapper}>
        <QRCodeSVG
          className={generatorStyles.svg}
          value={url}
          bgColor={back}
          fgColor={fore}
          size={size}
          level="H"
          ref={qrRef}
        />

        <div className={generatorStyles.qrcode__inputs}>
          <ColorPicker
            format="hex"
            value={back}
            onChange={(e) => setBack(`#${e.value}`)}
          />
          <ColorPicker
            format="hex"
            value={fore}
            onChange={(e) => setFore(`#${e.value}`)}
          />
          {/*<input*/}
          {/*  type="color"*/}
          {/*  value={back}*/}
          {/*  onChange={(e) => setBack(e.target.value)}*/}
          {/*/>*/}
          {/*<input*/}
          {/*  type="color"*/}
          {/*  value={fore}*/}
          {/*  onChange={(e) => setFore(e.target.value)}*/}
          {/*/>*/}
        </div>
        <Button className={buttonStyles.button} onClick={downloadQRcode}>
          Download
        </Button>
      </div>
    </main>
  );
}

export default Generator;
