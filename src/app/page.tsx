import Userist from "@/component/user-list";
import queryOptions from "@/service/user/user-quries";
import { Hydrate, getDehydratedQuery } from "@/utils/react-query";
import Profile from "@/app/_component/Profile";
import Button from "@/component/common/button";

export default async function Home() {
  const { queryKey, queryFn } = queryOptions.all();

  const query = await getDehydratedQuery({ queryKey, queryFn });

  return (
    <>
      <section className="min-w-full overflow-x-auto flex flex-nowrap gap-[1rem] pl-3 py-2 border-b border-gray-100">
        <Profile
          user={{
            name: "me",
            image: null,
          }}
          className=" w-[5rem] h-[5rem] "
        />
        {USER_LIST.map((user, index) => {
          return (
            <Profile key={index} user={user} className=" w-[5rem] h-[5rem]" />
          );
        })}
      </section>
      <section className="flex-grow">
        <div className="h-full">지도영역</div>
      </section>
      <Hydrate state={{ queries: [query] }}>
        <Userist />
      </Hydrate>
      <Button label="hello world" />
      <Button label="hello world" size="sm" />
      <Button label="hello world" variant="navy" />
      <Button label="hello world" variant="gray" />
      <Button label="hello world" size="lg" variant="red" />
      <Button label="hello world" size="xl" />
    </>
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
