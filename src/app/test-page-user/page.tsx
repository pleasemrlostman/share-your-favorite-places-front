import queryOptions from "@/service/user/user-quries";
import { Hydrate, getDehydratedQuery } from "@/utils/react-query";

export default async function Home() {
  const { queryKey, queryFn } = queryOptions.all();

  const query = await getDehydratedQuery({ queryKey, queryFn });

  console.log("query", query.state.data?.data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hydrate state={{ queries: [query] }}>
        <>hello world</>
      </Hydrate>
    </main>
  );
}
