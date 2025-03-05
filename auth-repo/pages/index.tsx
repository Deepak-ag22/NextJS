import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoginPage from "./LoginPage";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (status === "authenticated") {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      if (countdown === 0) {
        clearInterval(interval);
        router.push("/dashboard");
      }

      return () => clearInterval(interval); 
    }
  }, [status, countdown, router]);

  if (status == "authenticated") {
    return (
      <div>
        <p>Redirecting in {countdown} seconds...</p>
      </div>
    );
  }

  return <LoginPage />;
}
