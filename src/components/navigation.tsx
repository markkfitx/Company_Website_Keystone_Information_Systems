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

export default function Navigation() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                {NavDB.navigation.map(item =>(
                    item.children && item.children.length > 0 ? (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <Link
                                    key={item.label}
                                    title={item.label}
                                    href={item.url}
                                >{item.label}</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid min-w-[250px] w-max">
                                    {item.children.map(subItem => (
                                        <li>
                                            <NavigationMenuLink>
                                                <Link
                                                    key={subItem.label}
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
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link
                                    key={item.label}
                                    title={item.label}
                                    href={item.url}
                                >{item.label}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                ))}
                
            </NavigationMenuList>
        </NavigationMenu>
    )
}