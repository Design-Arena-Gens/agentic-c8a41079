import { Message } from "@/lib/conversations";
import { motion } from "framer-motion";

type MessageBubbleProps = {
  message: Message;
  isOwn: boolean;
};

export function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex flex-col gap-2 ${isOwn ? "items-end" : "items-start"}`}
    >
      <span className="text-xs font-medium text-slate-400">
        {message.timestamp}
      </span>
      <div
        className={[
          "max-w-[75%] rounded-3xl px-5 py-3 text-sm leading-relaxed shadow-sm",
          isOwn
            ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-brand-500/30"
            : "bg-white text-slate-700 backdrop-blur-md"
        ].join(" ")}
      >
        <p>{message.body}</p>
        {message.attachments?.length ? (
          <div className="mt-3 space-y-3">
            {message.attachments.map((attachment) => {
              if (attachment.type === "image") {
                return (
                  <img
                    key={attachment.id}
                    src={attachment.url}
                    alt={attachment.name ?? "Attachment"}
                    className="w-full max-w-xs rounded-2xl object-cover shadow"
                  />
                );
              }
              return (
                <div
                  key={attachment.id}
                  className="flex items-center gap-3 rounded-2xl border border-surface-100 bg-white/80 px-4 py-3"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                    {attachment.type}
                  </span>
                  <span className="text-sm text-slate-700">
                    {attachment.name ?? "Attachment"}
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
