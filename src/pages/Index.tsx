import { Helmet } from "react-helmet-async";
import { ChatWidget } from "@/components/chat/ChatWidget";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cozy Cart Support | AI Customer Service Chat</title>
        <meta
          name="description"
          content="Get instant help with your Cozy Cart orders. Our AI support agent is available 24/7 to answer questions about shipping, returns, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background gradient-bg relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />

        {/* Header */}
        <header className="glass-card sticky top-0 z-20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl widget-header-gradient flex items-center justify-center shadow-glow">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-xl text-foreground tracking-tight">Cozy Cart</h1>
                <p className="text-xs text-muted-foreground">Home Goods & Lifestyle</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Support
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                AI Support Online
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                How can we{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                  help you
                </span>{" "}
                today?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Chat with our AI support agent for instant answers about orders, shipping, returns, and more.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: "🚚", label: "Shipping Info", desc: "Delivery times" },
                { icon: "↩️", label: "Returns", desc: "30-day policy" },
                { icon: "💳", label: "Payment", desc: "Secure checkout" },
                { icon: "📦", label: "Track Order", desc: "Real-time updates" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="quick-action-card flex flex-col items-start gap-2 p-4 rounded-2xl text-left"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-sm font-medium text-foreground block">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Chat Widget */}
            <div className="h-[600px] md:h-[650px]">
              <ChatWidget />
            </div>

            {/* Footer Info */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card">
                <span className="text-sm text-muted-foreground">
                  Need more help?
                </span>
                <a
                  href="mailto:sahilsaras38@gmail.com"
                  className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition-opacity"
                >
                  Email our team →
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Available Mon-Fri, 9 AM - 6 PM IST
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
