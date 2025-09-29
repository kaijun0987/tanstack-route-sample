import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_test1")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_test1/route"!</div>;
}
