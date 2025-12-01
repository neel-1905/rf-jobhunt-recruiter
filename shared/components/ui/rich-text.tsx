import DOMPurify from "isomorphic-dompurify";

export default function RichText({ html }: { html: string }) {
  const cleanHtml = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

  return (
    <div
      className="rich-content"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}
