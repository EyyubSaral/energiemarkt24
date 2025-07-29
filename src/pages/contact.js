import { useRef } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0f44774e-4c01-40d8-8794-266ccd4f22f3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Nachricht gesendet");
      formRef.current.reset();
      console.log("Success", res);
    }
  };

  return (
    <div className="bg-[#272c48] min-h-screen py-20">
      <div className="flex items-center max-w-6xl mx-auto px-6 my-6 hover:scale-90 transition">
        <div className="flex-grow h-[2px] bg-[#ff7f50]"></div>
        <h1 className="text-center px-8 text-6xl text-white font-bold w-auto whitespace-nowrap">
          Kontakt
        </h1>
        <div className="flex-grow h-[2px] bg-[#ff7f50]"></div>
      </div>

      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 items-start p-6">
        {/* FORMULAR */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="bg-white text-gray-800 rounded-xl p-6 shadow-lg"
        >
          <input
            type="hidden"
            name="access_key"
            value="0f44774e-4c01-40d8-8794-266ccd4f22f3"
          ></input>

          <h2 className="text-2xl font-semibold mb-4">Kontaktformular</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()} // örnek: 25.07.2025 11:42
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-1">
              Nachricht
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Absenden
          </button>
        </form>

        {/* KONTAKT-INFOS-KUTUSU */}
        <div className="bg-[#31395f] rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6 border-b border-[#ff7f50] pb-2">
            Kontaktmöglichkeiten
          </h2>

          <a
            href="https://wa.me/4915256254164"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-green-400 hover:underline mb-4"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp schreiben
          </a>

          <div className="flex items-center gap-3 text-orange-300 mb-3">
            <FaPhone className="text-xl" />
            <span>+49 1525 6254164</span>
          </div>

          <div className="flex items-center gap-3 text-yellow-300">
            <FaEnvelope className="text-xl" />
            <span>kundenservice@energiemarkt24.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
