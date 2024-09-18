"use client";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
// import { UserButton } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs';
import Link from "next/link";

function Header({user,profileInfo}) {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
        label:"Jobs",
        path:"/jobs",
        show:user

    },
    {
        label:"Activity",
        path:"/activity",
        show:profileInfo?.role==='candidate'

    },
    {
        label:"MemberShip",
        path:"/membership",
        show:user

    },
    {
        label:"Account",
        path:"/account",
        show:user

    },

  ];

  return (
    <div>
      <header className="mb-10 flex h-16 w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className=" lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <Link href={"/"} className="mr-6 hidden lg:flex">
              <h3>JOBSCO</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((item) => {
                return item.show ? (
                  <Link
                  onClick={()=>sessionStorage.removeItem("filterParams")}
                    key={item.label}
                    href={item.path}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : null;
              })}
              <UserButton afterSignOutUrl="/"/>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="hidden font-bold text-4xl lg:flex mr-6" href={'/'}>
        JOB.COM
        </Link>
        <nav className="hidden lg:flex gap-6 ml-auto">
        {menuItems.map((item) => {
                return item.show ? (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : null;
              })}
              <UserButton afterSignOutUrl="/"/>
        </nav>

      </header>
    </div>
  );
}
export default Header;
