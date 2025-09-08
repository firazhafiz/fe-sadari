"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDisplay(date: Date | undefined) {
  if (!date) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("id-ID", { month: "long" });
  const yyyy = date.getFullYear();
  return `${dd} ${month}, ${yyyy}`;
}

function formatISO(date: Date | undefined) {
  if (!date) return "";
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function Calendar28({
  label = "Tanggal Lahir",
  placeholder = "Pilih tanggal",
  onChange,
}: {
  label?: string;
  placeholder?: string;
  onChange?: (value: string, date?: Date, display?: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [month, setMonth] = React.useState<Date | undefined>(new Date());
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col gap-3 w-full">
      <Label htmlFor="date">{label}</Label>
      <div className="relative flex gap-2 w-full">
        <Input
          id="date"
          value={value}
          placeholder={placeholder}
          className="w-full bg-white text-slate-800 cursor-pointer"
          readOnly
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2 text-slate-500 hover:text-slate-700 bg-transparent"
            >
              <CalendarIcon className="size-3.5 text-slate-500" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(d) => {
                setDate(d);
                const display = formatDisplay(d);
                const iso = formatISO(d);
                setValue(display);
                onChange?.(iso, d, display);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
