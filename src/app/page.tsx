import Userist from "@/component/user-list";
import queryOptions from "@/service/user/user-quries";
import { Hydrate, getDehydratedQuery } from "@/utils/react-query";
import Profile from "@/app/_component/Profile";

export default async function Home() {
  const { queryKey, queryFn } = queryOptions.all();

  const query = await getDehydratedQuery({ queryKey, queryFn });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hydrate state={{ queries: [query] }}>
        <Userist />
      </Hydrate>
      <section className="min-w-full overflow-x-auto flex flex-nowrap gap-[1rem] pl-3 py-2 border-b border-gray-100">
        <Profile
          user={{
            name: "me",
            image: null,
          }}
          className=" w-[5rem] h-[5rem]"
        />
        {USER_LIST.map((user, index) => {
          return (
            <Profile key={index} user={user} className=" w-[5rem] h-[5rem]" />
          );
        })}
      </section>
      <section className="flex-grow">
        <div className="h-full">지도영역_</div>
      </section>
    </main>
  );
}

const USER_LIST = [
  {
    name: "bk",
    image: null,
  },
  {
    name: "chu",
    image:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202010/22/2182ecd3-b8cc-4993-98a7-8c2568f9fbbc.jpg",
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
];
