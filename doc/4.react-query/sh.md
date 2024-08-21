# TanStack Query 문서

이번 프로젝트에서 사용할 TanStack Query를 app router 환경에서 사용하는데 초점을 맞추어 작업하려고 한다.
  
</br>  


## 📍 TanStack Query란?

어플리케이션의 비동기 데이터를 관리하고 캐시 및 동기화 기능을 제공하는 라이브러리이다. 즉, **서버 상태 관리 라이브러리**이다.
  
</br>  


### 1. Provider 만들기

초기 세팅으로 QueryClientProvider로 감싸서 queryClient를 하위 컴포넌트들에게 전달하도록, ReactQueryProviders 컴포넌트를 따로 만들어 거기에 client 및 쿼리 생성 함수를 작성하여 RootLayout에 적용하였다.

> QueryClientProvider는 ContextProvider로 동작하며 하위 컴포넌트에서 QueryClient를 사용할 수 있게 하여 캐시 데이터 사용이 가능해진다!
> 

```tsx
//src/hooks/useReactQuery.tsx
"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, 
            //SSR에서 클라이언트에서 즉시 재요청하는 것을 피하기 위해 0이상으로
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

여기서 useState를 사용하여 queryClient를 설정하는 이유는 상태 관리를 조절하고, 컴포넌트 렌더링과 상태 업데이트를 조절하기 위해서다.

- **초기 렌더링 중 설정**
    
    React Query는 초기 렌더링 동안에 QueryClient를 설정하고 사용하기 위한 상태를 필요로 한다.
    
- **동적 설정 관리**
    
    QueryClientProvider의 설정을 동적으로 변경하려면 useState를 활용해 QueryClient를 상태로 관리하고, 상태 업데이트를 통해 변경 사항을 QueryClientProvider에 적용할 수 있다.
    
- **컴포넌트 렌더링과 분리**
    
    QueryClientProvider의 설정을 컴포넌트 수명주기와 연관해서 관리하고자 할 때, 즉 컴포넌트가 마운트되거나 언마운트될 때 설정을 useState를 통해 업데이트하고 관리할 수 있다.

  
</br>  


### 2. **서비스 설계하기**

일단 유저 리스트를 받아오고 유저 등록하는 api를 각 기능별로 폴더를 생성했다.

fetch를 사용하여 HTTP 요청을 수행하는 기본 Service 클래스를 만들어 get, post 매서드의 요청을 처리할 수 있도록 작성하였다.

```
📦service
 ┣ 📂auth //유저 등록 post
 ┃ ┣ 📜queries.ts
 ┃ ┣ 📜service.ts
 ┃ ┗ 📜useAuthService.ts
 ┣ 📂user //유저 리스트 get
 ┃ ┣ 📜queries.ts
 ┃ ┣ 📜service.ts
 ┃ ┗ 📜useUserService.ts
 ┗ 📜index.ts //HTTP 요청
```
  
</br>  

만든 Service 클래스를 상속받아 유저 리스트 api를 요청하도록 인스턴스를 생성하고,

```tsx
//src/service/user/service.ts
import Service from "@/service/index";

class UserService extends Service {
  getUserList() {
    return this.http.get("/user/list");
  }
}

export default new UserService();
```
  
</br>  

위에 작성한 인스턴스를 실행하고, queryKey와 queryFn을 관리하도록 쿼리 옵션을 정의한다.

```tsx
//src/service/user/queries.ts
import UserService from "@/service/user/service";

const queryKeys = {
  all: ["users"] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getUserList(),
  }),
};

export default queryOptions;
```
  
</br>  

작성한 인스턴스와 쿼리 옵션을 토대로 서비스별로 훅을 작성하여 관리하도록 하였다.

```tsx
//src/service/user/useUserService.ts
import { useQuery } from "@tanstack/react-query";

import queryOptions from "@/service/user/queries";

export const useUsers = () => useQuery(queryOptions.all());

```

이전에 작성한 쿼리 옵션 queryOptions.all()을 호출, queryKey와 queryFn을 포함한 객체를 반환하여 결론적으로 UserService.getUsers()를 호출한다.
  
</br>  

이렇게 useUsers 훅으로 서버로부터 data를 가져온다.

```tsx
//src/app/(beforeLogin)/_component/LoginForm.tsx

export default function LoginForm() {
	const { data: userList } = useUsers();

 return (
	 ...
	 <div>
	   {userList?.map((user, index: number) => {
	    return <div key={index}>{user.email}</div>;
		  })}
   </div>
 )
}
```
  
</br>  

### 참고자료

https://soobing.github.io/react/next-app-router-react-query