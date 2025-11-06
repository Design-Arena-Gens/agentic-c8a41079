import { LucideCamera, LucideMic, LucideSend, LucideSparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

export function MessageInput({ onSend }: MessageInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <motion.form
      layout
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-3xl bg-white/90 p-4 shadow-xl shadow-brand-700/10 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <LucideSparkles className="h-4 w-4 text-brand-500" />
          Smart composer enabled • AI assisted replies ready
        </span>
        <span>Swipe up to expand</span>
      </div>
      <div className="flex items-end gap-3">
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-100 text-brand-600 transition hover:bg-brand-500 hover:text-white"
        >
          <LucideCamera className="h-5 w-5" />
        </button>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Message the squad with a creative pulse..."
          className="min-h-[3rem] flex-1 resize-none rounded-2xl border border-surface-100 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-100 text-brand-600 transition hover:bg-brand-500 hover:text-white"
          >
            <LucideMic className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-600 hover:to-brand-700"
          >
            <LucideSend className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.form>
  );
}
