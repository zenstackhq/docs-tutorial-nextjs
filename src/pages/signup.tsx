import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { useState, type FormEvent } from "react";
import { useCreateUser } from "../lib/hooks";

const Signup: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { trigger: signup } = useCreateUser();

  async function onSignup(e: FormEvent) {
    e.preventDefault();
    try {
      await signup({ data: { email, password } });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      if (err.info?.prisma && err.info?.code === "P2002") {
        // P2002 is Prisma's error code for unique constraint violations
        alert("User alread exists");
      } else {
        alert("An unknown error occurred");
      }
      return;
    }

    // signin to create a session
    await signIn("credentials", { redirect: false, email, password });
    Router.push("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-5xl font-extrabold text-white">Sign up</h1>
      <form className="mt-16 flex flex-col gap-8 text-2xl" onSubmit={onSignup}>
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
          <label htmlFor="password" className="inline-block w-32 text-white ">
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
          value="Create account"
          className="cursor-pointer rounded border border-gray-500 py-4 text-white"
        />
      </form>
      <div className="mt-2 text-base font-medium text-gray-300">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary-700 underline">
          {" "}
          Login here{" "}
        </Link>
      </div>
    </div>
  );
};

export default Signup;
