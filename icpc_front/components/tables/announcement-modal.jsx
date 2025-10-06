"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function AnnouncementModal() {
  const [open, setOpen] = useState(true)
  const panelRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Close if clicked outside panel
  function onBackdropClick(e) {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="announcement-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onMouseDown={onBackdropClick}
        >
          {/* Backdrop */}
          <div aria-hidden="true" className="fixed inset-0 bg-foreground/30 backdrop-blur-sm" />
          {/* Panel */}
          <div
            ref={panelRef}
            className={cn(
              "relative z-10 w-full max-w-xl rounded-lg bg-card text-card-foreground shadow-lg",
              "outline-none",
            )}
            // prevent backdrop click from bubbling when starting inside panel
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Close icon only */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-md hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
              aria-label="Close announcement"
              title="Close"
            >
              {/* X icon */}
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="p-6">
              <header className="mb-3 text-center">
                <h2 id="announcement-title" className="text-balance text-xl font-semibold text-red-600">
                  Announcement
                </h2>
              </header>

              <main className="prose prose-sm max-w-none leading-relaxed text-pretty text-center">
                <p>
                  In response to several requests from participating teams regarding the overlap of the ICPC India
                  Online Preliminary Round with the Simon Marais Mathematics Competition (SMMC), as well as requests
                  from many teams citing festive engagements during the October month, the Organizing Committee has
                  decided to reschedule the contest to last week of October or 1st week of November. A poll will be
                  organized to fix the final dates ( Wed Oct 29th 5 PM to 8 PM or Sat Nov 9th 2 PM to 5 PM ).
                </p>
                <p>
                  To accommodate this change, the last date for registration and fee submission has been extended to
                  24th October 2025.
                </p>
                <p>
                  This decision has been taken to ensure maximum participation and avoid any inconvenience to
                  contestants across institutions.
                </p>
              </main>
            </div>
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "fixed bottom-4 left-4 z-40 inline-flex size-12 items-center justify-center rounded-full",
            "bg-card text-card-foreground shadow-lg",
            "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring",
          )}
          aria-label="Open announcement"
          title="Open announcement"
        >
          {/* Alert icon */}
          <svg
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.72 3h16.92a2 2 0 0 0 1.72-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
            />
          </svg>
        </button>
      ) : null}
    </>
  )
}
