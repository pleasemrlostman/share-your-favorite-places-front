# cva, tailwindmerge, clsx 재사용 UI

위 세가지 라이브러리를 이용하여 이전에 만들어 둔 textarea 컴포넌트를 리팩토링 하고자 한다.

- 참고
    
    [cva, tailwindmerge, clsx를 조합하여 재사용 가능한 UI 만들기](https://xionwcfm.tistory.com/328)

</br>  

### 1. 설치

```bash
npm install class-variance-authority
npm install tailwind-merge
npm install --save clsx
```

위에서 부터 cva, twMerge, clsx를 설치한다.

</br>  

### 2. 유틸함수 생성(twMerge + clsx)

```tsx
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
```

이 유틸함수는 tailwind를 merge할 때 발생할 수 있는 클래스 충돌 문제를 해결해준다.

</br>  

### 3. cva

```tsx
import { cva } from "class-variance-authority";

const TextareaVariants = cva(
	`rounded-md resize-none p-4 focus:outline-none`, {
	  variants: {
	    variant: {
	      default: "border",
	      gray: "bg-[#F0F4F8]",
	    },
	    size: {
	      default: "w-full",
	      fit: "w-fit",
	      sm: "w-1/4",
	      md: "w-2/4",
	      lg: "w-3/4",
	    },
	  },
	  defaultVariants: {
	    variant: "default",
	  },
	}
)
```

cva를 사용하여 첫번째 인자로는 공통으로 들어갈 css를 입력하고, 두번째 인자로는 각각의 값을 객체로 넣는다.

두번째 인자로 들어가는 객체에 variants / size 값을 지정하여 그 값에 따른 디자인을 보여주도록 구성하였다.

</br>  

### 4. 유틸함수 사용

```tsx
import { cn } from "@/utils";

export const Textarea: FC<TextareaTypes.TextNativeProps> = ({
  variant,
  size,
  disabled,
  className,
  ...props
}) => {
  return (
    <textarea
      {...props}
      disabled={disabled}
      className={cn(TextareaVariants({variant, size}), className)}
    />
  )
}
```

이후 위에서 만든 유틸함수(twMerge + clsx)를 사용하여 cva 함수의 반환값인 함수(TextareaVariants)를 호출한다.

</br>  

### 예시

```tsx
<Textarea control={control} name="textarea" variant="default" size="default"  />
<Textarea control={control} name="textarea" variant="gray" size="md" />
<Textarea control={control} name="textarea" disabled />
```

</br>  

### ✔️ cva

일관성 있는 UI를 정의하고 사용할 수 있도록 도와주는 툴로써 shadcn/ui 컴포넌트의 핵심 도구이다.

[cva](https://cva.style/docs)

</br>  

### ✔️ **tailwindmerge**

스타일 충돌 없이 자바스크립트에서 tailwind CSS 클래스를 효율적으로 병합하는 기능을 가진 라이브러리

[npm: tailwind-merge](https://www.npmjs.com/package/tailwind-merge)

</br>  

### ✔️ **clsx**

조건부 className를 구성하기 쉬우며 크기가 작은 장점이 있는 라이브러리이다.

[npm: clsx](https://www.npmjs.com/package/clsx)