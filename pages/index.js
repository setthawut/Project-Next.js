import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1> This Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Porfolio</Link>
        </li>
      </ul>
    </div>
  );
}
