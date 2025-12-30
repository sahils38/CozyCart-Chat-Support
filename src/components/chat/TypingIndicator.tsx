export function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 animate-fade-in">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl widget-header-gradient flex items-center justify-center shadow-glow animate-pulse-glow">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>

      <div className="ai-bubble px-5 py-4 rounded-2xl rounded-bl-md border border-border/50 shadow-sm">
        <div className="flex items-center gap-1.5">
          <div
            className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-typing-dot"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-typing-dot"
            style={{ animationDelay: "200ms" }}
          />
          <div
            className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-typing-dot"
            style={{ animationDelay: "400ms" }}
          />
        </div>
      </div>
    </div>
  );
}
