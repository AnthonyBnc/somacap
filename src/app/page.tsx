import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

async function fetchSession() {
  const session = await getServerAuthSession();
  return session;
}

export default async function Home() {
  const session = await fetchSession();
  if (typeof window !== "undefined" && session) {
    window.location.href = "/home";
    return null;
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
