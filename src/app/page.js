import Image from "next/image";

import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Server Action</h1>
      <Link href={'/user-management'}><Button>User-Management</Button></Link>
    </main>
  );
}
