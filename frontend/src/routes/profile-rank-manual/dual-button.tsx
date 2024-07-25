import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

interface DualButtonProps {
  id: string;
  title: string;
  value: number;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export function DualButton({
  title,
  value,
  onIncrement,
  onDecrement,
  id,
}: DualButtonProps) {
  return (
    <div>
      <h2 className="mb-2 text-sm font-semibold text-muted-foreground">
        {title}
      </h2>
      <div className="flex items-center rounded-md border justify-between">
        <Button variant="ghost" onClick={onDecrement.bind(null, id)}>
          <MinusIcon />
        </Button>
        <div className="px-8">{value}</div>
        <Button variant="ghost" onClick={onIncrement.bind(null, id)}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}
