import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    <NavigationMenu viewport={false} className="px-12">
      <NavigationMenuList>
        {NavDB.navigation.map((item) =>
          item.children && item.children.length > 0 ? (
            <NavigationMenuItem key={`${item.label}-${item.url}`}>
              {/* Top-level trigger */}
              <NavigationMenuTrigger>
                {item.label}
              </NavigationMenuTrigger>

              {/* Single panel showing all submenus */}
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-6 p-4 min-w-[600px]">
                  {item.children.map((subItem) => (
                    <div key={`${subItem.label}-${subItem.url}`} className="flex flex-col space-y-2">
                      {/* Second-level item title */}
                      <Link href={subItem.url} className="font-semibold text-base hover:underline">
                        {subItem.label}
                      </Link>

                      {/* Third-level items */}
                      {subItem.children && subItem.children.length > 0 && (
                        <ul className="ml-2 flex flex-col space-y-1">
                          {subItem.children.map((thirdItem) => (
                            <li key={`${thirdItem.label}-${thirdItem.url}`}>
                              <Link
                                href={thirdItem.url}
                                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                              >
                                {thirdItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`${item.label}-${item.url}`}>
              <NavigationMenuLink asChild>
                <Link href={item.url} className="font-medium hover:underline">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
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