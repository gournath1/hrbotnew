import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { links } from "@/links";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="border-b-[1px] border-b-neutral-100">
      <div className="container max-w-screen-xl flex justify-between items-center">
        <div>AI Labs</div>
        <div>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                cn("inline-block px-6 py-8", {
                  "border-b-2 border-b-neutral-600": isActive,
                })
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Avatar>
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
