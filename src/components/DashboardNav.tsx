"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./UserNav";

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={`("group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground") ${
              pathname === item.href ? "bg-accent" : "bg-transparent"
            } `}
          >
            <item.icon className="mr-2 w-4 h-4 text-primary" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
