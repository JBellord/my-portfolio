import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full h-16 flex justify-center items-center">
      <div className="w-10/12 flex items-center justify-between">
        <span className="text-lg font-semibold">Made with 🩸, 💧 & 😭</span>
        <span className="text-lg font-semibold">
          Built by{" "}
          <span className="underline decoration-amber-500">
            ji<span className="text-amber-500">o</span>
          </span>
          .
        </span>
      </div>
    </div>
  );
}
