"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function GenreDropDown() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Genre</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit p-5">
        <DropdownMenuLabel className="text-2xl leading-8 font-[600] p-0 ">
          Genres
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-4 leading-6 p-0  font-[400] mt-1">
          See lists of movies by genre
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-[#E4E4E7]" />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Action</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Adventure
          </DropdownMenuRadioItem>
          <Link href="/Genre">
            <DropdownMenuRadioItem value="right">
              Animation
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
