"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import NavDB from "@/data/navigation.json"
import { Link } from "@radix-ui/react-navigation-menu"
import Image from "next/image"
import smLogo from "@/img/icon_logo.png"
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navigation() {
    const { setTheme } = useTheme()
    return (
        <div className="flex flex-row flex-nowrap items-center justify-between border-b xl:px-26 lg:px-20 md:px-14 px-8">
            <div className="flex flex-row flex-nowrap items-center justify-start">
                <Image 
                    src={smLogo}
                    alt="Keystone Information Systems Logo"
                    width={25}
                    height={25}
                />
                <NavigationMenu viewport={false} className="px-12 py-6">
                    <NavigationMenuList>
                        {NavDB.navigation.map(item =>(
                            item.children && item.children.length > 0 ? (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuTrigger>
                                        <Link
                                            title={item.label}
                                            href={item.url}
                                        >{item.label}</Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid min-w-[250px] w-max">
                                            {item.children.map(subItem => (
                                                <li>
                                                    <NavigationMenuLink key={subItem.label}>
                                                        <Link
                                                            title={subItem.label}
                                                            href={subItem.url}
                                                        >{subItem.label}</Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))
                                                
                                            }
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuLink>
                                        <Link
                                            title={item.label}
                                            href={item.url}
                                            className="font-medium"
                                        >{item.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        ))}
                        
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-row flex-nowrap items-center justify-start gap-1">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline">ClientCare</Button>
            </div>
        </div>
       
    )
}