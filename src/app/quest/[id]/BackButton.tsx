"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's a previous page in history, otherwise go to home
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">Back to Portfolio</span>
    </button>
  );
}
