"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    if (
      username === "matchmaker" &&
      password === "123456"
    ) {
      localStorage.setItem(
        "auth",
        "true"
      );

      router.push("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
      <h1 className="text-3xl font-bold mb-6">
        Matchmaker Login
      </h1>

      <input
        className="border p-3 w-full rounded mb-4"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        className="border p-3 w-full rounded mb-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-3 rounded"
      >
        Login
      </button>

      <div className="mt-4 text-sm text-gray-500">
        Demo:
        <br />
        Username: matchmaker
        <br />
        Password: 123456
      </div>
    </div>
  );
}