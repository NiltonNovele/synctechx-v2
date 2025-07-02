"use client";

import { useState } from "react";

export function SkipToContent() {
  const [focused, setFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md transition-transform ${
        focused ? "translate-y-0" : "-translate-y-20"
      }`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      Skip to content
    </a>
  );
}
