import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-3">
        <Link className="btn" href="/auth/signin">
          Sign In
        </Link>
        <Link className="btn" href="/auth/signup">
          Sign Up
        </Link>
      </div>
    </main>
  );
}
