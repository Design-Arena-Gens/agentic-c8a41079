"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/sidebar";
import { ChatWindow } from "@/components/chat-window";
import { MessageInput } from "@/components/message-input";
import { MetricsGrid } from "@/components/metrics-grid";
import {
  Conversation,
  Message,
  conversations as initialConversations
} from "@/lib/conversations";
import {
  LucideSmartphone,
  LucideSparkles,
  LucideWaves,
  LucideActivity
} from "lucide-react";

export default function Page() {
  const [threads, setThreads] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string>(initialConversations[0]?.id);

  const activeConversation = useMemo(
    () => threads.find((thread) => thread.id === activeId) ?? threads[0],
    [threads, activeId]
  );

  const handleSendMessage = (body: string) => {
    setThreads((current) =>
      current.map((thread) => {
        if (thread.id !== activeConversation?.id) return thread;
        const newMessage: Message = {
          id: `${thread.id}-${Date.now()}`,
          from: "You",
          body,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          isRead: true
        };
        return {
          ...thread,
          unreadCount: 0,
          messages: [...thread.messages, newMessage]
        };
      })
    );
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-surface-50 via-white to-brand-50">
      <div className="absolute inset-x-0 -top-40 z-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-[380px] bg-[radial-gradient(circle_at_bottom,_rgba(14,116,144,0.12),_rgba(255,255,255,0))]" />

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-16">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 rounded-4xl bg-white/70 p-8 shadow-2xl shadow-brand-500/10 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center gap-4 text-brand-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
              <LucideSmartphone className="h-4 w-4" /> Android First
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-100 px-4 py-2 text-xs text-slate-600">
              <LucideActivity className="h-4 w-4" /> Ultra-Low Latency
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-100 px-4 py-2 text-xs text-slate-600">
              <LucideWaves className="h-4 w-4" /> Haptic Pulse Engine
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-[2fr,3fr] md:items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-surface-900">
                PulseWave is a powerful, modern messaging universe crafted for
                Android.
              </h1>
              <p className="text-base text-slate-600">
                Lounge inside a fluid Material You shell, orchestrate immersive
                chatrooms, and launch expressive responses powered by AI-assisted
                composer tools. Every interaction feels cinematic yet lightning
                quick.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-500/20 to-brand-700/20 p-6">
              <motion.div
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1.02, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="rounded-3xl border border-brand-100 bg-white/80 p-6 text-sm text-slate-600 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-wide text-brand-600">
                  EXPERIENCE PREVIEW
                </p>
                <p className="mt-3 text-slate-700">
                  Tap into holographic threads, co-create moodboards with your crew,
                  and sprint through voice-powered workflows. PulseWave fuses
                  real-time translation, noise-free calls, and adaptive theming into
                  one unified Android canvas.
                </p>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-brand-50/60 p-4 text-xs text-brand-600">
                  <LucideSparkles className="h-5 w-5" />
                  Crafted for foldables, tablets, and wearables in one sync.
                </div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        <MetricsGrid />

        <section className="grid gap-8 lg:grid-cols-[360px,1fr]">
          <Sidebar
            conversations={threads}
            activeConversationId={activeConversation?.id ?? ""}
            onSelectConversation={setActiveId}
          />
          <div className="flex h-full flex-col gap-4">
            {activeConversation ? <ChatWindow conversation={activeConversation} /> : null}
            <MessageInput onSend={handleSendMessage} />
          </div>
        </section>
      </section>
    </main>
  );
}
