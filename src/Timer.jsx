import React from "react";
import { useState, useEffect } from "react";

export default function Timer() {
  return (
    <div
      className="
      font-bebas 
      text-xl
      text-crimson-carrot
      flex 
      flex-col
      items-center
      justify-center
      min-h-svh
      w-full
      "
    >
      <div
        className="
      text-5xl
      tracking-tight
      "
      >
        Sprint One
      </div>
      <div
        className="
      text-9xl
      "
      >
        00:00
      </div>
    </div>
  );
}
