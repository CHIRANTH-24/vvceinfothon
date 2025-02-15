// import { MenuBar } from "@/components/menu-bar"
import { MenuBar } from "@/components/nav/menu-bar"
import { Themetoggle } from "@/components/nav/theme-toggle"


export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="mb-[120px]">
        <Themetoggle />
      </div>
      <MenuBar />
    </div>
  )
}
