"use client";
import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <div className="flex justify-center">
    <a
      href="https://www.bki.co.id/file_download/552466Compro%20BKI%202021%20210522%20.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white rounded-lg text-white font-medium transition"
    >
      <Download className="w-5 h-5" />
      Company Profile
    </a>
    </div>
  );
}
