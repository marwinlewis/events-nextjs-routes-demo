import type { NextPage } from "next";
import Link from "next/link";

const Homepage: NextPage = () => {
  return (
    <div>
      <h1>Homepage TS</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
