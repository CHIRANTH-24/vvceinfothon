import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CategoryPie } from "./CategoryPie"
import { WaterLevel } from "./WaterLevel"
import { WaterLevel2 } from "./WaterLevel2"

export function WaterLevelDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Water Level </Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Water Level</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <WaterLevel />
                    <WaterLevel2 />
                </div>
            </DialogContent>
        </Dialog>
    )
}
