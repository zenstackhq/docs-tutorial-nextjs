import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useState, type FormEvent } from "react";

const Signin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSignin(e: FormEvent) {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      await Router.push("/");
    } else {
      alert("Signin failed");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-5xl font-extrabold text-white">Login</h1>
      <form
        className="mt-16 flex flex-col gap-8 text-2xl"
        onSubmit={(e) => void onSignin(e)}
      >
        <div>
          <label htmlFor="email" className="inline-block w-32 text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="inline-block w-32 text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <input
          type="submit"
          value="Sign me in"
          className="cursor-pointer rounded border border-gray-500 py-4 text-white"
        />
      </form>
    </div>
  );
};

export default Signin;
