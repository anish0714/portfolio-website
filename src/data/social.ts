const email = "dandekaranish@gmail.com";

export const social = {
  github: "https://github.com/anish0714",
  linkedin: "https://www.linkedin.com/in/anish-dandekar-73b907143/",
};

export function gmailComposeUrl(subject?: string, body?: string) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: email });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}
