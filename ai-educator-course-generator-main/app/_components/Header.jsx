"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // ✅ Correct import for navigation in Next.js
import React, { useEffect, useState } from "react";

function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR rendering

  return (
    <div className="flex justify-between p-2 shadow-sm">
      <Image src={"/next.png"} width={180} height={80} alt="image" priority />

      <Link href="https://ai-educator-course-gen.vercel.app/" passHref>
        <Button className="mt-2">Get Started</Button>
      </Link>
    </div>
  );
}

export default Header;
