"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookieStorage = {
      getItem: (key) => {
        const cookies = document.cookie
          .split(";")
          .map((cookie) => cookie.split("="))
          .reduce((acc, [key, val]) => ({ ...acc, [key.trim()]: val }), {});
        return cookies[key];
      },
      setItem: (key, val) => {
        document.cookie = `${key}=${val}; path=/; max-age=31536000`; // 1 yıl
      },
    };

    const consentPropertyName = "cookie_consent";
    const shouldShowPopup = () => !cookieStorage.getItem(consentPropertyName);

    if (shouldShowPopup()) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookie_consent=true; path=/; max-age=31536000"; // 1 yıl
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-xl bg-white shadow-lg border border-gray-300 rounded-lg p-4 z-50 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
      <p className="text-sm text-gray-800">
        Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.
        Durch die weitere Nutzung stimmen Sie der Verwendung zu.
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        OK
      </button>
    </div>
  );
}
