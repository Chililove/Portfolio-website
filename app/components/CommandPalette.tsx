"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { siteContent } from "@/data/siteContent";

// One entry in the palette: a label, an icon, and what to do when chosen.
type Command = {
  label: string;
  icon: string;
  keywords?: string; // extra words to match on (not shown)
  run: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0); // which item the arrow keys have selected
  const inputRef = useRef<HTMLInputElement>(null);

  const { email, github, linkedin } = siteContent.contact;

  const commands: Command[] = [
    { label: "Home", icon: "🏠", run: () => router.push("/") },
    { label: "Projects", icon: "💼", run: () => router.push("/projects") },
    {
      label: "What I'm looking for",
      icon: "🎯",
      keywords: "jobs roles hiring",
      run: () => router.push("/looking-for"),
    },
    { label: "Contact", icon: "✉️", run: () => router.push("/contact") },
    {
      label: "Email me",
      icon: "📧",
      keywords: "mail",
      run: () => {
        window.location.href = `mailto:${email}`;
      },
    },
    { label: "GitHub", icon: "🐙", run: () => window.open(github, "_blank") },
    { label: "LinkedIn", icon: "🔗", run: () => window.open(linkedin, "_blank") },
  ];

  // Filter by the typed query (matches the label or its hidden keywords).
  const q = query.toLowerCase();
  const filtered = commands.filter((c) =>
    `${c.label} ${c.keywords ?? ""}`.toLowerCase().includes(q)
  );

  function openPalette() {
    setOpen(true);
    setQuery("");
    setActive(0);
  }

  // Global shortcut: ⌘K / Ctrl+K toggles the palette; Esc closes it.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((wasOpen) => !wasOpen);
        setQuery("");
        setActive(0);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey); // cleanup
  }, []);

  // Move focus into the search box whenever the palette opens.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function runCommand(cmd: Command | undefined) {
    if (!cmd) return;
    setOpen(false);
    cmd.run();
  }

  // Arrow keys move the selection; Enter runs the selected command.
  function onInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[active]);
    }
  }

  return (
    <>
      {/* A small always-visible trigger so visitors discover the shortcut. */}
      <button
        className="cmdk-trigger"
        onClick={openPalette}
        aria-label="Open command palette"
      >
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>

      {open && (
        // Clicking the dimmed backdrop closes the palette.
        <div className="cmdk-overlay" onClick={() => setOpen(false)}>
          <div
            className="cmdk-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            // Clicks inside the panel must NOT bubble up and close it.
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              className="cmdk-input"
              placeholder="Jump to… (try “projects”)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0); // reset selection when the list changes
              }}
              onKeyDown={onInputKeyDown}
            />

            <ul className="cmdk-list">
              {filtered.length === 0 && (
                <li className="cmdk-empty">No results</li>
              )}
              {filtered.map((cmd, i) => (
                <li
                  key={cmd.label}
                  className={`cmdk-item ${i === active ? "active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => runCommand(cmd)}
                >
                  <span className="cmdk-icon">{cmd.icon}</span>
                  <span>{cmd.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
