import { useRouterState } from "@tanstack/react-router";

export const PlayerPage = () => {
  const { player } = useRouterState({ select: (s) => s.location.state });

  return (
    <div className="flex flex-col">
      Id:{player?.id}
      {"  "}
      Name:{player?.name}
      {"  "}
      Player Page
    </div>
  );
};
