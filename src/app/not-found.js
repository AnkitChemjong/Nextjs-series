import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-red-500 to-zinc-700">
      <h1>Page not found</h1>
      <Link href={'/'}>
      <Button>Go Back</Button>
      </Link>
    </div>
  )
}

export default NotFound
