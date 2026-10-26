"use client";

import { useState } from "react";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button type="button" className="copy-email" onClick={copy}>
      <span aria-live="polite">{copied ? "Copied ✓" : "Copy email"}</span>
    </button>
  );
}
