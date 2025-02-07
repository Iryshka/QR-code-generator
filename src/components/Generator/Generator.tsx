import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import generatorStyles from "../Generator/Generator.module.css";
import buttonStyles from "../Button/Button.module.css";
import { ColorPicker } from "primereact/colorpicker";
import QRmenu from "../QRmenu/QRmenu.tsx";
import Button from "../Button/Button.tsx";
import GeneratorDropDown from "../GeneratorDropDown/GeneratorDropDown.tsx";

function Generator() {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [error, setError] = useState("");
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(200);

  const qrRef = useRef<SVGSVGElement | null>(null);

  function isValidURL(url) {
    const regex = new RegExp(
      /^((http|https):\/\/)(www\.)?[a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)$/
    );
    return regex.test(url);
  }

  const generateQRcode = () => {
    if (!url.trim()) {
      setError("URL is required");
      return;
    }
    if (!isValidURL(url)) {
      setError("Enter a valid URL (starting with  https://)");
      return;
    }

    setError("");
    setSubmittedUrl(url);
  };

  const downloadQRcode = () => {
    const svgElement = qrRef.current;
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qrcode.png";
      link.click();
    };

    img.src = url;
  };

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
        {error && <p className={generatorStyles.generator__error}>{error}</p>}
        <Button
          isDisabled={url.length === 0}
          className={buttonStyles.button}
          onClick={generateQRcode}
        >
          Generate QR
        </Button>
      </div>

      <div className={generatorStyles.qrcode__wrapper}>
        <QRCodeSVG
          className={generatorStyles.svg}
          value={submittedUrl}
          bgColor={back}
          fgColor={fore}
          size={size}
          level="H"
          ref={qrRef}
        />

        <div className={generatorStyles.qrcode__inputs}>
          <div>
            <label>Background Color:</label>
            <ColorPicker
              format="hex"
              value={back}
              onChange={(e) => setBack(`#${e.value}`)}
            />
          </div>
          <div>
            <label>Foreground Color:</label>
            <ColorPicker
              format="hex"
              value={fore}
              onChange={(e) => setFore(`#${e.value}`)}
            />
          </div>
        </div>

        <Button
          disabled={false}
          className={buttonStyles.button}
          onClick={downloadQRcode}
        >
          Download QR Code
        </Button>
      </div>
    </main>
  );
}

export default Generator;
