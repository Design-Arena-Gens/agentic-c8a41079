import { Conversation } from "@/lib/conversations";
import { motion } from "framer-motion";
import { LucidePin } from "lucide-react";

type ConversationCardProps = {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
};

const statusColorMap: Record<string, string> = {
  online: "bg-emerald-500",
  offline: "bg-slate-300",
  busy: "bg-amber-500"
};

export function ConversationCard({
  conversation,
  isActive,
  onClick
}: ConversationCardProps) {
  const recentParticipant = conversation.participants[0];

  return (
    <motion.button
      layout
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={[
        "w-full rounded-2xl border border-transparent px-4 py-3 text-left transition",
        isActive
          ? "bg-surface-100/80 shadow-lg shadow-brand-500/10 border-brand-100"
          : "hover:bg-white/70 border-transparent"
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={recentParticipant.avatar}
              alt={recentParticipant.name}
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <span
              className={`absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border border-white ${statusColorMap[recentParticipant.status]}`}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-surface-900">
                {conversation.title}
              </p>
              {conversation.pinned ? (
                <LucidePin className="h-3.5 w-3.5 text-brand-500" />
              ) : null}
            </div>
            <p className="mt-1 line-clamp-1 text-xs text-slate-500">
              {conversation.messages.at(-1)?.body ?? "Start a conversation"}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs font-medium text-slate-400">
            {conversation.messages.at(-1)?.timestamp ?? ""}
          </span>
          {conversation.unreadCount > 0 ? (
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-semibold text-white">
              {conversation.unreadCount}
            </span>
          ) : null}
        </div>
      </div>
    </motion.button>
  );
}
