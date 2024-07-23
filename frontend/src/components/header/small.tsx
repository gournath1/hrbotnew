import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { links } from "@/links";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";
import UserAvatar from "./user-avatar";

export default function SmallScreenHeaderDrawer() {
  return (
    <div className="py-4">
      <Drawer>
        <DrawerTrigger>
          <Menu size={32} />
        </DrawerTrigger>
        <DrawerContent className="p-4">
          <DrawerHeader />
          <DrawerTitle className="hidden" />
          {links.map((link) => (
            <DrawerClose key={link.label} asChild>
              <NavLink to={link.href} className="mb-1 last:mb-0">
                {({ isActive }) => (
                  <span
                    className={cn(
                      "block py-2 bg-neutral-200 rounded px-4",
                      isActive && "bg-neutral-700 text-background"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </NavLink>
            </DrawerClose>
          ))}

          <Separator className="my-4" />

          <UserAvatar />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
