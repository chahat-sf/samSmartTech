import { useRef } from "react";
import emailjs from "@emailjs/browser"; // ✅ updated import
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnt1oq1",     // ✅ Service ID
        "template_mkrxdb7",    // ✅ Template ID
        form.current,
        "ObZiMztOeY9ObBPq4"    // ✅ Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <form ref={form} onSubmit={sendEmail} className="mt-8 max-w-lg mx-auto space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" className="w-full border rounded px-4 py-2" required />
        <input type="email" name="user_email" placeholder="Your Email" className="w-full border rounded px-4 py-2" required />
        <input type="tel" name="user_phone" placeholder="Your Phone" className="w-full border rounded px-4 py-2" />
        <textarea name="message" placeholder="Your Message" className="w-full border rounded px-4 py-2" rows="4" required></textarea>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Send Message</button>
      </form>
    </div>
  );
}
