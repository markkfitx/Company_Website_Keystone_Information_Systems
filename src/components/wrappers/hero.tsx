import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

interface TemplateProps {
  children: React.ReactNode;
}

export default function HeroSectionSimpleCentred({ children }: TemplateProps) {
  return (
    <>
      {/* Hero */}
        <div className="container mx-auto">
          {/* Announcement Banner */}
          {children}
        </div>
      {/* End Hero */}
    </>
  );
}
