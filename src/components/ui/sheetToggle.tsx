import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CreditCard, Home, MenuIcon, Settings } from "lucide-react";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <div>
          <ul className="flex flex-col gap-y-4 mt-10">
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link href="/dashboard/settings">
              {" "}
              <li>Settings</li>
            </Link>
            <Link href="/dashboard/billing">
              <li>Billing</li>
            </Link>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
