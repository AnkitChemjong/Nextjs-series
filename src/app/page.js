import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Welcome to recipe app</h1>
      <Link href={'/recipe-list'}>Explore Recipes and Foods</Link>
    </div>
  );
}
