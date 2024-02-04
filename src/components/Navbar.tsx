import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import UserNav from "./UserNav";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Shahzaib<span className="text-primary">Dev</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ThemeToggle />
          {(await isAuthenticated()) ? (
            <div className="flex gap-2">
              <UserNav
                name={user?.email as string}
                email={user?.given_name as string}
                image={user?.picture as string}
              />
              {/* <LogoutLink>
                <Button>Log out</Button>
              </LogoutLink> */}
            </div>
          ) : (
            // Content to display when not authenticated
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant="outline">Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
