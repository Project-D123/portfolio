"use client";

import { useEffect, useRef, useState } from "react";
import { Mascot } from "page-mascot";
import styles from "./PortfolioMascot.module.css";

const GREETING = "Hey, thanks for stopping by! Take a look around.";
const GREETING_AUDIO = "/mascots/portfolio-greeting.mp3";

export default function PortfolioMascot() {
  const [showGreeting, setShowGreeting] = useState(false);
  const greetingShown = useRef(false);
  const greetingAudioAttempted = useRef(false);
  const greetingAudio = useRef<HTMLAudioElement | null>(null);
  const greetingTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (greetingTimer.current !== null) window.clearTimeout(greetingTimer.current);
      greetingAudio.current?.pause();
      greetingAudio.current = null;
    };
  }, []);

  function playGreetingAudioOnce() {
    if (greetingAudioAttempted.current) return;
    greetingAudioAttempted.current = true;

    try {
      const audio = new Audio(GREETING_AUDIO);
      greetingAudio.current = audio;
      audio.play().catch((error: unknown) => {
        console.warn("Portfolio mascot greeting audio could not play.", error);
      });
    } catch (error) {
      console.warn("Portfolio mascot greeting audio could not start.", error);
    }
  }

  function greetOnce() {
    if (!greetingShown.current) {
      greetingShown.current = true;
      setShowGreeting(true);
      greetingTimer.current = window.setTimeout(() => setShowGreeting(false), 4800);
    }

    playGreetingAudioOnce();
  }

  return (
    <div className={styles.heroMascot} onClickCapture={greetOnce}>
      <div className={styles.greeting} role="status" aria-live="polite" aria-atomic="true">
        {showGreeting ? GREETING : ""}
      </div>
      <Mascot
        directions="/mascots/daniel-directions.webp"
        reactions="/mascots/daniel-reactions.webp"
        size={520}
        label="Daniel's interactive portfolio mascot"
        className={styles.mascotButton}
      />
    </div>
  );
}
