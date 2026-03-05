import { ModeToggle } from "@/components/common/Button/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, House, Mail, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-18">
      <div className="relative flex justify-between items-start gap-4">
        {/* SIDEBAR */}
        <aside className="sticky top-18 flex flex-col gap-4 w-[256px] h-full overflow-y-auto">
          <div className="flex items-center gap-2 border rounded-lg p-3">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/profile.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Rizki Rifani</h1>
              <p className="text-xs text-muted-foreground font-medium">
                Fullstack Web Developer
              </p>
            </div>
          </div>
          {/* NAVIGATION MENU */}
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <h3 className="text-sm text-black/40 font-semibold">
                Navigation
              </h3>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
            <nav>
              <ul className="flex flex-col gap-2 w-full">
                <Link href="/">
                  <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2 border rounded-md">
                    <House className="h-4 w-4" />
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                    <User className="h-4 w-4" />
                    About
                  </li>
                </Link>
                <Link href="/projects">
                  <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                    <BriefcaseBusiness className="h-4 w-4" />
                    Projects
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <h3 className="text-sm text-black/40 font-semibold">Theme</h3>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
            <ModeToggle />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 h-full p-4 bg-blue-200 rounded-lg">
          <div className="bg-red-200 w-full h-[200px] mb-4">1</div>
          <div className="bg-red-200 w-full h-[200px] mb-4">2</div>
        </main>
      </div>
    </div>
  );
}
