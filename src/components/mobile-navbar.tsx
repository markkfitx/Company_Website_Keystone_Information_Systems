"use client"
import { Button } from "./ui/button"
import React, {ReactNode} from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {Menu} from "lucide-react"
import NavDB from "@/data/navigation.json";

export default function MobileNavbar(){
    const [goal, setGoal] = React.useState(350)
    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
    return (
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button variant="outline" className="md:hidden block"><Menu /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                    
                    </div>
                    <div className="mt-3 h-[120px]">
                    
                    </div>
                </div>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}