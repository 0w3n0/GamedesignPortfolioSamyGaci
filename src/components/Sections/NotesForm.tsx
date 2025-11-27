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
    <form style={{ flex: 1, display: "none", flexDirection: "column"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "20px",
          paddingBottom: "15px",
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textDecoration: "none",
            transition: "background 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#6e5494")}
          onMouseLeave={e => (e.currentTarget.style.background = "#333")}
        >
          {/* Ici tu peux mettre l'icône */}
          <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.933 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.625-5.476 5.922.43.372.823 1.103.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
        </a>

        {/* Itch.io */}
        <a
          href="https://reglisaille.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#f56c6c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textDecoration: "none",
            transition: "background 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#ff8c8c")}
          onMouseLeave={e => (e.currentTarget.style.background = "#f56c6c")}
        >
          <svg width="35" height="35" viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M484 256c0 126.5-102.5 229-229 229S26 382.5 26 256 128.5 27 255 27s229 102.5 229 229zm-229 136c75.1 0 136-60.9 136-136s-60.9-136-136-136-136 60.9-136 136 60.9 136 136 136z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/samygaci/"
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#0077b5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textDecoration: "none",
            transition: "background 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#0093d0")}
          onMouseLeave={e => (e.currentTarget.style.background = "#0077b5")}
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.46C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.082 20.452H3.54V9h3.542v11.452zM5.31 7.577c-1.137 0-2.058-.924-2.058-2.06 0-1.137.921-2.061 2.058-2.061s2.059.924 2.059 2.061c0 1.136-.922 2.06-2.059 2.06zm15.14 12.875h-3.542v-5.604c0-1.336-.027-3.055-1.861-3.055-1.861 0-2.145 1.452-2.145 2.951v5.708h-3.542V9h3.4v1.561h.048c.474-.897 1.633-1.843 3.36-1.843 3.593 0 4.258 2.364 4.258 5.438v6.796z" />
          </svg>
        </a>
      </div>

      <p style={{ color: "black", padding: "0px" }}>
        You can contact me here!
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
