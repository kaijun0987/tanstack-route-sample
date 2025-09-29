import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name?: string;
  age?: string;
};

const userDataQueryOptions = (name?: string, age?: string) => {
  return queryOptions({
    queryKey: ["data", name, age],
    queryFn: async () => {
      console.log("test");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { name, age };
    },
  });
};

export const Route = createFileRoute("/about-us/about")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): Inputs => {
    // validate and parse the search params into a typed state
    return {
      ...((search.name as string) && { name: (search.name as string) || "" }),
      ...((search.age as string) && { age: (search.age as string) || "" }),
    };
  },
  preload: true,
  loader: ({ context: { queryClient }, location }) => {
    //In this loader not allow using hooks
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name") || undefined;
    const age = searchParams.get("age") || undefined;
    // const {player} = location.state
    //  await queryClient.ensureInfiniteQueryData({
    //       queryKey,
    //       queryFn,
    //       initialPageParam,
    //       getNextPageParam,
    //     })
    return queryClient.ensureQueryData(userDataQueryOptions(name, age));
  },
});

function RouteComponent() {
  const navigate = useNavigate({ from: Route.fullPath });
  const search = useSearch({ strict: false });

  // Both of them are work but useLoaderData only allow get data, if using useSuspenseQuery allow get data and use
  // all query props e.g isLoading, isError, isSuccess, isFetching, etc
  const { data } = useSuspenseQuery(
    userDataQueryOptions(search.name, search.age)
  );

  useEffect(() => {
    console.log("loaderData", data);
  }, []);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (form) => {
    navigate({
      search: {
        // name: form.name,
        // age: form.age,
        ...(form.name !== "" && { name: form.name }),
        ...(form.age !== "" && { age: form.age }),
      },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col border border-black mb-4">
        Search Param Data:
        <p>name:{search?.name}</p>
        <p>age:{search?.age}</p>
        <p>
          data:{data.name} {data.age}{" "}
        </p>
        {/* <p>name:{name}</p>
        <p>age:{age}</p> */}
      </div>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          name
          <input className="border border-black" {...register("name")} />
        </div>

        <div className="flex flex-col">
          age
          <input className="border border-black" {...register("age")} />
        </div>

        <button className="text-blue-400" type="submit">
          Search Button
        </button>
      </form>
    </div>
  );
}
