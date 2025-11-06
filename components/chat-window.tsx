import { Conversation } from "@/lib/conversations";
import { LucideCheckCheck, LucideMoreHorizontal, LucideSignal, LucideWifi } from "lucide-react";
import { MessageBubble } from "./message-bubble";

type ChatWindowProps = {
  conversation: Conversation;
};

export function ChatWindow({ conversation }: ChatWindowProps) {
  const recipient = conversation.participants[0];

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden rounded-4xl bg-white/60 p-6 shadow-2xl shadow-brand-600/10 backdrop-blur-2xl">
      <header className="rounded-3xl bg-surface-100/70 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={recipient.avatar}
              alt={recipient.name}
              className="h-14 w-14 rounded-3xl object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-surface-900">
                {conversation.title}
              </h2>
              <p className="text-sm text-slate-500">{recipient.status}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <div className="flex items-center gap-1">
              <LucideSignal className="h-4 w-4" />
              <LucideWifi className="h-4 w-4" />
            </div>
            <button className="rounded-full bg-white/80 p-2 text-slate-500 transition hover:bg-brand-500 hover:text-white">
              <LucideMoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="mt-6 flex-1 space-y-6 overflow-y-auto pr-2">
        {conversation.messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.from === "You"}
          />
        ))}
      </div>

      <footer className="mt-6 flex items-center justify-between rounded-3xl bg-gradient-to-r from-surface-100/90 to-white px-6 py-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <LucideCheckCheck className="h-4 w-4 text-brand-500" />
          Messages are synced and encrypted across Android devices
        </div>
        <span>Today • {new Date().toLocaleDateString()}</span>
      </footer>
    </section>
  );
}
