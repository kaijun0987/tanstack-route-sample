import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { userListQueryOptions } from "../../services/query";
import { makeSearchSchema } from "./constant/schema";

type TSearch = {
  id?: string;
};

const validIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const Route = createFileRoute("/user/")({
  validateSearch: (search: TSearch) => {
    const schema = makeSearchSchema(validIds);
    const result = schema.safeParse(search);

    if (result.success) {
      return result.data;
    }

    return {
      id: undefined,
    };
  },
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(userListQueryOptions()),

  component: RouteComponent,
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const search = Route.useSearch();
  const { data } = useSuspenseQuery(userListQueryOptions());

  const { register, handleSubmit } = useForm<TSearch>({
    defaultValues: { id: search.id },
  });

  const onSubmit: SubmitHandler<TSearch> = (form) => {
    console.log(JSON.stringify(form.id));

    navigate({
      search: {
        id: form.id,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <span className="text-5xl">User List Page</span>
      <form
        className="flex flex-row gap-y-2 mb-6"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          ids
          <select {...register("id")} className="border-black border-2">
            <option>All</option>
            {validIds?.map((ids) => (
              <option key={ids} value={ids}>
                {ids}
              </option>
            ))}
          </select>
        </div>

        <button className="text-blue-400 mx-auto" type="submit">
          Search Button
        </button>
      </form>

      {data?.map((user) => (
        <Link
          key={user.id}
          className="border-b-2 pb-3"
          to="/user/$usersId"
          params={{ usersId: user.id }}>
          {user.id}: {user.name}
        </Link>
      ))}
    </div>
  );
}
