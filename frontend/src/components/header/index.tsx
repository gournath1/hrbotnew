import Logo from "@/assets/aiLogo.png";
import { cn } from "@/lib/utils";
import { links, routes } from "@/links";
import { Link, NavLink } from "react-router-dom";
import SmallScreenHeaderDrawer from "./small";
import UserAvatar from "./user-avatar";

export default function Header() {
  return (
    <nav className="border-b-[1px] border-b-neutral-100">
      <div className="container max-w-screen-xl flex justify-between items-center">
        <Link to={routes.home}>
          <img src={Logo} className="h-[50px]" />
        </Link>

        <div className="lg:hidden">
          <SmallScreenHeaderDrawer />
        </div>

        <div className="hidden lg:block">
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
        <div className="hidden lg:block">
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
}
