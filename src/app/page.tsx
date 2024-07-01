import Profile from "@/app/_component/Profile";

export default function Home() {
  return (
    <>
      <section className="min-w-full overflow-x-auto flex flex-nowrap gap-[1rem] pl-3 py-2 border-b border-gray-100">
        <Profile
          user={{
            name: "me",
            image: null,
          }}
          className=" w-[5rem] h-[5rem]"
        />
        {USER_LIST.map((user) => {
          return <Profile user={user} className=" w-[5rem] h-[5rem]" />;
        })}
      </section>
      <section className="flex-grow">
        <div className="h-full">지도영역_</div>
      </section>
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
