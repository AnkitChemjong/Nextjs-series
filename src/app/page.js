import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Welcome to recipe app of mine</h1>
      <Link href={'/recipe-list'}>Explore Recipes and Foods</Link>
    </div>
  );
}
