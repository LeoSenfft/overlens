"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Tiptap from "./tiptap";
import { useState, type FormEvent } from "react";

export function CreateNoteModal() {
  const [content, setContent] = useState("<p>Hello World! 🌎️</p>");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(content);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Criar Anotação</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Criar Anotação</DialogTitle>
            <DialogDescription>Crie sua anotação aqui</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="flex flex-col">
              <Tiptap value={content} onChange={(value) => setContent(value)} />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
