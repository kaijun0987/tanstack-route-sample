import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { userDetailQueryOpion } from "../../../services/query";

export const Route = createFileRoute("/user/$usersId")({
  loader: async ({ params, context: { queryClient } }) => {
    const { usersId } = params;
    const data = await queryClient.ensureQueryData(
      userDetailQueryOpion(usersId)
    );
    if (!data || Object.keys(data).length === 0) {
      throw redirect({ to: "/user", search: { id: undefined } });
    }

    return data;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { usersId } = Route.useParams();
  const { data } = useSuspenseQuery(userDetailQueryOpion(usersId));

  return (
    <div className="flex flex-col">
      {JSON.stringify(data, null, 2).slice(0, 100)}
    </div>
  );
}
