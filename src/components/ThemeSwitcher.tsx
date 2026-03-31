"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "dark", label: "Dark", color: "#3b82f6" },
  { id: "emerald", label: "Emerald", color: "#10b981" },
  { id: "sunset", label: "Sunset", color: "#f97316" },
  { id: "light", label: "Light", color: "#2563eb" }
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("app-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) return <div style={{ width: '80px' }} />; // prevent hydration mismatch placeholder

  return (
    <div className="theme-switcher" style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginLeft: '1rem' }}>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => changeTheme(t.id)}
          title={`Switch to ${t.label} theme`}
          style={{
             background: t.color,
             width: '20px',
             height: '20px',
             border: theme === t.id ? '2px solid var(--text-main)' : '2px solid transparent',
             borderRadius: '50%',
             cursor: 'pointer',
             transition: 'all 0.3s',
             boxShadow: theme === t.id ? `0 0 10px ${t.color}` : 'none'
          }}
          aria-label={`Theme ${t.label}`}
        />
      ))}
    </div>
  );
}
