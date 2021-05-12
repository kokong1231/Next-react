import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [text, setText] = useState<string>("Next.JS");

  setTimeout(() => {
  }, 1000)

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </div>
  );
}