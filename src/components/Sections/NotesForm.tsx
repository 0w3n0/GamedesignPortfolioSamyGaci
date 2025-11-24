import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const NotesForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 500) setMessage(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validation simple email
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (valid !== isEmailValid) {
      setIsEmailValid(valid);
      if (valid && buttonRef.current) {
        // Animation GSAP lorsque le bouton devient actif
        gsap.fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
        );
      }
    }
  };

  return (
    <form style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/*  */}

      <p style={{ color: "black", padding: "0px" }}>
        Wanna leave a note, a question, or an idea? Go ahead, this tiny notebook loves attention!
      </p>

      <label htmlFor="email" style={{ color: "black", paddingBottom: "10px" }}>EMAIL*</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
        required
        style={{
          marginBottom: "10px",
          padding: "8px",
          border: "1px solid #aaa",
          borderRadius: "5px",
          fontFamily: "inherit",
        }}
      />

      <label htmlFor="message" style={{ color: "black", paddingBottom: "10px" }}>Your Message :</label>
      <textarea
        id="message"
        placeholder="Write your message..."
        value={message}
        onChange={handleChangeMessage}
        style={{
          flex: 1,
          resize: "none",
          border: "1px solid #aaa",
          borderRadius: "5px",
          padding: "8px",
          marginBottom: "5px",
          fontFamily: "inherit",
        }}
      />
      <small style={{ alignSelf: "flex-end", marginBottom: "10px", color: "black" }}>
        {message.length} / 500
      </small>


      <button
        ref={buttonRef}
        type="submit"
        disabled={!isEmailValid}
        style={{
          background: isEmailValid ? "#ff6b6b" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px",
          cursor: isEmailValid ? "pointer" : "not-allowed",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default NotesForm;
