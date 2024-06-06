"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import Loader from "@/components/Loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
