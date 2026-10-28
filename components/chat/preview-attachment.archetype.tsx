import { defineComponent } from "archetype-os/components";
import { PreviewAttachment } from "./preview-attachment";

const image =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#93c5fd"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs><rect width="96" height="96" fill="url(#g)"/><circle cx="66" cy="30" r="10" fill="#fde68a"/><path d="M0 80 L32 44 L60 72 L76 58 L96 78 L96 96 L0 96Z" fill="#1e3a8a" opacity=".7"/></svg>'
  );

export default defineComponent({
  key: "preview-attachment",
  name: "Attachment Preview",
  description:
    "96px thumbnail of a file attached to a message or waiting in the composer. Images fill it; other files read \"File\". A spinner covers it while uploading; a remove button appears on hover in the composer.",
  code: { import: "@/components/chat/preview-attachment", export: "PreviewAttachment" },
  properties: {
    Kind: ["Image", "File"],
    State: ["Default", "Uploading", "Hover"],
  },
  render: ({ Kind, State }) => (
    <PreviewAttachment
      attachment={
        Kind === "Image"
          ? { contentType: "image/svg+xml", name: "skyline.png", url: image }
          : { contentType: "application/pdf", name: "report.pdf", url: "#" }
      }
      isUploading={State === "Uploading"}
      onRemove={() => undefined}
    />
  ),
  examples: { matrix: ["Kind", "State"] },
});
