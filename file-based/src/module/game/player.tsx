import { createFileRoute, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/game/player")({
  component: RouteComponent,
});

function RouteComponent() {
  const { player } = useRouterState({ select: (s) => s.location.state });
  return (
    <div className="flex flex-col">
      <p>Player Id: {player?.id}</p>
      <p>Player Name: {player?.name}</p>
    </div>
  );
}
