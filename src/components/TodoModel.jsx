import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoModal({ open, setOpen, todo, onSave }) {
  const [title, setTitle] = useState(todo?.title || "");

  const handleSave = () => {
    onSave(title);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input value={title} onChange={e => setTitle(e.target.value)} />

        <Button onClick={handleSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
