import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game/user/$userId")({
  component: RouteComponent,
});

function RouteComponent() {
  //Local path
  const { userId } = Route.useParams();

  return (
    <div>
      User:
      {userId}
    </div>
  );
}
