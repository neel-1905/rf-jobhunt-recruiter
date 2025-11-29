// components/OtpTimer.tsx
"use client";
import { useEffect, useState, useCallback } from "react";

type OtpTimerProps = {
  duration?: number; // seconds
  onResend: () => Promise<void> | void;
  autoStart?: boolean;
  className?: string;
};

export default function OtpTimer({
  duration = 30,
  onResend,
  autoStart = true,
  className = "",
}: OtpTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  const handleResend = useCallback(async () => {
    try {
      setIsRunning(false);
      setTimeLeft(duration);
      await onResend();
      setIsRunning(true);
    } catch (err) {
      console.error("Resend failed:", err);
    }
  }, [onResend, duration]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`flex flex-col items-center text-sm ${className}`}>
      {timeLeft > 0 ? (
        <span className="text-2xs">{formatTime(timeLeft)}</span>
      ) : (
        <button
          onClick={handleResend}
          className="text-primary text-2xs hover:underline font-medium"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
}
