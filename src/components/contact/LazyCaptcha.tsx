import { useState, useEffect } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function LazyCaptcha({ onVerify, onExpire }: {
  onVerify: (token: string) => void;
  onExpire: () => void;
}) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const handleTrigger = () => setShouldLoad(true);

    window.addEventListener("scroll", handleTrigger, { once: true });
    window.addEventListener("pointerdown", handleTrigger, { once: true });

    return () => {
      window.removeEventListener("scroll", handleTrigger);
      window.removeEventListener("pointerdown", handleTrigger);
    };
  }, []);

  return shouldLoad ? (
    <HCaptcha
      sitekey="220c130c-d160-4790-8a38-dbec3c74bab2"
      onVerify={onVerify}
      onExpire={onExpire}
      theme="light"
    />
  ) : (
    <div style={{ height: "80px" }}></div> // Reservar espacio
  );
}