"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [time, setTime] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      router.replace("/");
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="text-lg font-bold">Page Not Found</p>
        <p>Could not find the requested resource.</p>
        <p>Redirecting to the homepage in {time} seconds...</p>
      </div>
    </div>
  );
}
