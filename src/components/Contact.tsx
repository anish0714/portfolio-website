import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { gmailComposeUrl } from "../data/social";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const { ref, visible } = useReveal<HTMLElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${name || "a visitor"}`;
    const body = `Name: ${name}\nContact: ${contact}\n\n${message}`;
    window.open(gmailComposeUrl(subject, body), "_blank", "noreferrer");
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`mx-auto max-w-5xl px-6 py-14 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          Contact
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="text-2xl font-bold text-fg">Let's work together</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
            Have a role, project, or idea in mind? Send a message and it'll
            open a pre-filled Gmail draft, ready to send straight to my
            inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-line bg-canvas-subtle p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-fg-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="rounded-md border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-info" className="text-xs font-medium text-fg-muted">
                Email or Phone
              </label>
              <input
                id="contact-info"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="jane@company.com"
                className="rounded-md border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium text-fg-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a bit about the opportunity..."
              className="resize-none rounded-md border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-emphasis px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#388bfd]"
          >
            Send Message
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
