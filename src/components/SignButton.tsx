"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignButton() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <button
        className="bg-cyan-200 rounded px-4 py-2"
        onClick={() => signOut()}
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <button
      className="bg-cyan-200 rounded px-4 py-2"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}

export default SignButton;