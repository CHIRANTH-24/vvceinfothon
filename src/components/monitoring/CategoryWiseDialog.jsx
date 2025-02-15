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

export function CategoryWiseDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Category Wise</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Category Wise Consumption</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <CategoryPie />
                </div>
            </DialogContent>
        </Dialog>
    )
}
