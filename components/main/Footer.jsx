import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full h-full py-8 flex justify-center items-center md:h-16">
      <div className="w-10/12 flex items-center justify-between flex-col space-y-3 md:flex-row">
        <span className="bg-background rounded-full py-2 px-6 text-lg font-semibold">
          Made with 🩸, 💧 & 😭
        </span>
        <span className="bg-background rounded-full py-2 px-6 text-lg font-semibold">
          Built by{" "}
          <span>
            ji<span className="text-amber-500">o</span>
          </span>
          .
        </span>
      </div>
    </div>
  );
}
