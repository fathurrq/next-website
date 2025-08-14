export default function Newsletter() {
  return (
    <div className="py-36 px-48">
      <div className="border-white/50 border-opacity-50 rounded flex items-center py-8 flex-col gap-8 border-4 backdrop-blur-xl">
        <div className="font-medium text-6xl">Subscribe to Our Newsletter</div>
        <p className="text-2xl text-white/50">News, promotion, and exclusive content.</p>
        <input
          type="text"
          placeholder="Enter email here"
          className="flex-1 bg-transparent outline-none px-2 border-b border-white text-3xl placeholder:text-3xl"
        />
        <a
          href="#"
          className="inline-block text-lg px-4 py-2 bg-[rgba(255,255,255,0.3)] hover:bg-white hover:text-black transition-colors duration-400 border border-white border-opacity-50"
        >
          Enter →
        </a>
      </div>
    </div>
  );
}
