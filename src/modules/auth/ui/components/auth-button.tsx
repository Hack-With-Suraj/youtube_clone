"use client";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignedOut } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";


export function Auth_Button() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-900 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            sign in
          </Button>
        </SignInButton>
      </SignedOut>
      <UserButton />
    </>
  );
}
