"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Home</Link>
      <Link href={`/blog/whateva`}>post</Link>
      <button onClick={() => router.push("/")}></button>
    </div>
  );
};

export default Contact;
