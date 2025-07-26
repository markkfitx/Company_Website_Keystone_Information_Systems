import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import NavDB from "@/data/navigation.json";
import Image from "next/image";
import smLogo from "@/img/icon_logo.png";
import { Button } from "@/components/ui/button";
import ThemeDropdown from "./themeDropDown";
import MobileNavbar from "@/components/mobile-navbar";
import { ReactNode } from "react";

function NavigationContent() {
  return (
    <NavigationMenu className="px-12">
      <NavigationMenuList>
        {NavDB.navigation.map((item) =>
          item.children && item.children.length > 0 ? (
            <NavigationMenuItem key={`${item.label}-${item.url}`}>
              <NavigationMenuTrigger>
                <Link href={item.url} className="font-medium">{item.label}</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid min-w-[250px] w-max">
                  {item.children.map((subItem) => (
                    <li key={`${subItem.label}-${subItem.url}`}>
                      <NavigationMenuLink asChild>
                        <Link href={subItem.url} className="font-medium">{subItem.label}</Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`${item.label}-${item.url}`}>
              <NavigationMenuLink asChild>
                <Link href={item.url} className="font-medium">{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

export default function Navigation() {
  return (
      <div className="flex flex-row flex-nowrap items-center md:justify-between justify-end md:border-b xl:px-24 lg:px-20 md:px-14 px-8 py-6">
        <div className="flex-row flex-nowrap items-center justify-start gap-2 md:flex hidden">
          <Image
            src={smLogo}
            alt="Keystone Information Systems Logo"
            width={25}
            height={25}
          />
          <NavigationContent />
        </div>
        <div className="flex-row flex-nowrap items-center justify-start gap-1 md:flex hidden">
          <ThemeDropdown />
          <Button variant="outline">ClientCare</Button>
        </div>
        {/* Mobile version */}
        <MobileNavbar />
      </div>
  );
}
