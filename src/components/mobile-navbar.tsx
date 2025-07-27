"use client"

import React, { useState, useEffect } from "react"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import NavDB from "@/data/navigation.json"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

function HydrationSafeCollapsible({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    // Server or before client mount: render static closed button only to avoid mismatch
    return (
      <div className="w-full">
        <button
          className="flex items-center justify-between w-full text-lg font-medium"
          aria-expanded={false}
          disabled
        >
          {label}
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    )
  }

  // Client after mount: render full interactive collapsible
  return (
    <Collapsible defaultOpen={false} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium">
        {label}
        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-4 mt-2 flex flex-col space-y-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-6 flex flex-col space-y-4">
        <SheetTitle className="opacity-0">Keystone Information System</SheetTitle>

        {NavDB.navigation.map((item) =>
          item.children && item.children.length > 0 ? (
            <HydrationSafeCollapsible key={item.url} label={item.label}>
              {item.children.map((subItem) => (
                <Link
                  key={`${subItem.label}-collapsable-${subItem.url}`}
                  href={subItem.url}
                  className="text-base hover:underline py-1"
                >
                  {subItem.label}
                </Link>
              ))}
            </HydrationSafeCollapsible>
          ) : (
            <Link
              key={`${item.label}-collapsable-${item.url}`}
              href={item.url}
              className="text-lg font-medium hover:underline"
            >
              {item.label}
            </Link>
          )
        )}

        <SheetClose asChild>
          <Button variant="outline" className="mt-6">
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
