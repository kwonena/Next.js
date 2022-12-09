import Link from "next/link";

export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      {children}
    </>
  );
}
