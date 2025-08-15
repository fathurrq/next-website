export default function Newsletter() {
  return (
    <div className="py-36 px-6 md:px-12 lg:px-48">
      <div className="text-white border-white/50 border-opacity-50 rounded flex items-center py-8 flex-col gap-8 border-4 backdrop-blur-xl w-full max-w-3xl mx-auto">
        <div className="font-medium text-3xl md:text-6xl text-center">
          Subscribe to Our Newsletter
        </div>
        <p className="text-lg md:text-2xl text-white/50 text-center">
          News, promotion, and exclusive content.
        </p>
        <div className="w-full px-28">
          <input
            type="text"
            placeholder="Enter email here"
            className="w-full text-center bg-transparent outline-none border-b border-white text-lg md:text-3xl placeholder:text-lg md:placeholder:text-3xl"
          />
        </div>
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
