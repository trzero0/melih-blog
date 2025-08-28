import { useState } from "react";
import { dataabout, skills, services, worktimeline, contactConfig } from "../bot/yourdata";

export default function AIBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m Melih’s AI assistant. Ask me anything about him!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    // Default response
    let response = "Hmm, I don’t have an answer for that yet. Try asking about skills, services, or contact info.";

    // Simple Q&A
    const lower = input.toLowerCase();
    if (lower.includes("who are you") || lower.includes("about")) {
      response = dataabout.aboutme;
    } else if (lower.includes("skills")) {
      response = "Melih’s skills include: " + skills.map(s => s.name).join(", ");
    } else if (lower.includes("services")) {
      response = "Melih offers: " + services.map(s => s.title).join(", ");
    } else if (lower.includes("experience") || lower.includes("timeline")) {
      response = "Work experience: " + worktimeline.map(w => `${w.jobtitle} (${w.date}) in ${w.where}`).join("; ");
    } else if (lower.includes("contact")) {
      response = `You can reach Melih at ${contactConfig.YOUR_EMAIL} 📧 or phone: ${contactConfig.YOUR_FONE}`;
    }

    setMessages(prev => [...prev, { sender: "bot", text: response }]);
    setInput("");
  };

  return (
    <div 
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-96 bg-white border rounded-2xl shadow-lg p-4 text-sm z-50"
      style={{ minHeight: "350px" }}
    >
      <div className="h-56 overflow-y-auto mb-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${msg.sender === "bot" ? "text-blue-600" : "text-gray-800 text-right"}`}
          >
            <span className="block">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg p-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Melih..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-500 text-white rounded-lg px-3"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
