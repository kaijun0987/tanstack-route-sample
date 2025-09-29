import { createFileRoute, useParams } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/game/user/$userId")({
  component: RouteComponent,
});

function RouteComponent() {
  //Local path params
  const { userId } = Route.useParams();

  // Global path params strict: false is required
  // const { userId } = useParams({ strict: false });

  return (
    <div>
      User:
      {userId}
    </div>
  );
}
