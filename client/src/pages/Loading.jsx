import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientConfig } from "../config/appConfig";

const MESSAGES = [
  "Waking up...",
  "Verifying you actually work here...",
  "Letting HR know you're (allegedly) working...",
];

const TOTAL_DURATION_IN_MS = 4000; // fake delay for testing

export default function Loading() {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Change the message at even intervals across the total duration
    const interval = setInterval(() => {
      setMessageIndex((prev) => Math.min(prev + 1, MESSAGES.length - 1));
    }, TOTAL_DURATION_IN_MS / MESSAGES.length);

    // Redirect when the "check" is done
    const timeout = setTimeout(() => {
      navigate("/home", { replace: true });
    }, TOTAL_DURATION_IN_MS);

    // Cleanup: avoids timers firing after the user leaves this page
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light px-3">
      <div
        className="spinner-border mb-4"
        role="status"
        style={{ width: "4rem", height: "4rem", color: clientConfig.corporateColor }}
      >
        <span className="visually-hidden">LOADING...</span>
      </div>

      <p className="fs-5 text-muted mb-0" aria-live="polite">
        {MESSAGES[messageIndex]}
      </p>
    </main>
  );
}