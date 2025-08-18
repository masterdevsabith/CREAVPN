"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState<import("@supabase/supabase-js").User | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/auth/signup");
      } else {
        setUser(user);
      }
    }
    checkUser();
  }, [router]);

  if (!user) return <p>Loading...</p>;
  return <h1>welcome to dashboa</h1>;
}
