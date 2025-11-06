import { useMemo } from "react";
import { LucidePlus, LucideSearch, LucideSlidersHorizontal } from "lucide-react";
import { Conversation } from "@/lib/conversations";
import { ConversationCard } from "./conversation-card";

type SidebarProps = {
  conversations: Conversation[];
  activeConversationId: string;
  onSelectConversation: (id: string) => void;
};

export function Sidebar({
  conversations,
  activeConversationId,
  onSelectConversation
}: SidebarProps) {
  const pinned = useMemo(
    () => conversations.filter((item) => item.pinned),
    [conversations]
  );
  const regular = useMemo(
    () => conversations.filter((item) => !item.pinned),
    [conversations]
  );

  return (
    <aside className="flex h-full w-full max-w-sm flex-col gap-6 rounded-3xl bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Channels
          </p>
          <h1 className="text-xl font-semibold text-surface-900">
            PulseWave Chats
          </h1>
        </div>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-brand-600 transition hover:bg-brand-500 hover:text-white">
          <LucidePlus className="h-4 w-4" />
        </button>
      </header>

      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
          <LucideSearch className="h-4 w-4" />
        </span>
        <input
          type="search"
          placeholder="Search conversations"
          className="w-full rounded-2xl border border-surface-100 bg-surface-50 py-3 pl-10 pr-12 text-sm text-slate-600 placeholder:text-slate-400 focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-slate-500 transition hover:bg-brand-500 hover:text-white"
          aria-label="Filter conversations"
        >
          <LucideSlidersHorizontal className="h-4 w-4" />
        </button>
      </div>

      {pinned.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Pinned
          </h2>
          <div className="space-y-2">
            {pinned.map((conversation) => (
              <ConversationCard
                key={conversation.id}
                conversation={conversation}
                isActive={conversation.id === activeConversationId}
                onClick={() => onSelectConversation(conversation.id)}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Threads
        </h2>
        <div className="space-y-2 overflow-y-auto pr-1">
          {regular.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
              isActive={conversation.id === activeConversationId}
              onClick={() => onSelectConversation(conversation.id)}
            />
          ))}
        </div>
      </section>
    </aside>
  );
}
