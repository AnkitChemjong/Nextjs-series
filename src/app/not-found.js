'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-5">
      nothing
      <Link href={'/'}><Button>Go Home</Button></Link>
    </div>
  )
}

export default NotFound
