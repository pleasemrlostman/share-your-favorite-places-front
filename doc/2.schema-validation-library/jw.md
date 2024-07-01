# Schema

## 스키마란?

프론트엔드에서 낯선 Schema(이하 스키마)는 백엔드에서 자주 쓰이는 데이터베이스와 밀접한 관계를 가지고 있는 용어이다. 간단히 말해, 스키마는 데이터베이스의 구조나 조직도를 일컫는 용어이다.
물론, AI programming의 영역으로 들어간다면 스키마는 좀 더 어문학적인 느낌의 정의로 바뀌긴 하는데 이건 지금 알아볼 필요는 없을 것이다.

백엔드스러운 용어임에도 불구하고 프론트엔드에서도 스키마는 아주 광범위하게 쓰이고 있으며, 우리는 이미 무의식중에 관련된 코드를 접하거나 심지어 작성하기도 한다.

바로 JSON이다.

## JSON(Javascript Object Notation)

정확히는 JSON-Schema라고 불리는 이 JSON 객체는 프론트엔드에서 가장 친숙한 스키마일 것이다. 심지어 타입도 가질 수 있다!

(심플함을 추구하는 Javascript의 영향 아래, JSON 스키마 또한 간추려진 타입 형태를 지니고 있다. 사실상 Number 타입만 해도 원래 int, long, short, float, double 등 여러가지 형태의 타입으로 존재하고 있다..)

- `{ "key1": "value1", "key2": "value2" }` : Object
- `[ "first", "second", "third" ]` : Array
- `42, 3.141592` : Number
- `"This is a string"` : String
- `true || false` : Boolean
- `null` : Null

이러한 타입이 있지만 한가지 문제점 또한 존재한다. 특정 JSON 객체에서 어떤 방식으로 해당 key-value 즉, Record 쌍에 어떤 값이 들어와야 하고, 필수인지 그리고 어떤 타입을 지니고 있어야 하는지 JSON 단독으로는 알 수가 없다.

## JSON-Schema

이러한 관점에서 JSON-Schema가 들어온다. 거두절미 하고 아래 두 코드를 보면 이해가 갈 것이다.

```
{
  "first_name": "George",
  "last_name": "Washington",
  "birthday": "1732-02-22",
  "address": {
    "street_address": "3200 Mount Vernon Memorial Highway",
    "city": "Mount Vernon",
    "state": "Virginia",
    "country": "United States"
  }
} // 해당 JSON은 validation을 통과하지 못한다!
```

```
{
  "type": "object",
  "properties": {
    "first_name": { "type": "string" },
    "last_name": { "type": "string" },
    "birthday": { "type": "string", "format": "date" },
    "address": {
       "type": "object",
       "properties": {
         "street_address": { "type": "string" },
         "city": { "type": "string" },
         "state": { "type": "string" },
         "country": { "type" : "string" }
       }
    }
  }
}
```

두 코드를 보면 하나는 일반적인 Record 형태로 들어가 있는 것을 볼 수 있고, 나머지 하나는 타입이 들어간 것을 볼 수 있다.

사용자 입장에서 생각해보면, 사용자는 특정 key에 들어간 (예를 들어 'person' 이라는 key 값이 있다고 가정하자.) value에 어떤 값이 들어가는지, 어떠한 형태로 return 하는지를 굉장히 중요하게 여길것이 분명하다. 그렇기 때문에 우리는 이 JSON이 어떠한 형태로 오는지 확실하게 해줄 validation 장치가 필요한 것이다.

이러한 validation을 JSON-Schema에서는 두 JSON 객체를 단순히 비교하여 해당 값이 정확한지 또는 아닌지를 판단했다. (JSON-Schema는 특별한 장치가 들어간 어떠한 로직이 아니라 그냥 JSON 객체이다!)

간단하게 알아봤지만, 대충 스키마를 어떤식으로 확인하고 그에 대한 의미가 무엇인지 잘 인지했을 것이다. 심지어 이러한 validation은 아래에서 후술하겠지만, 더 간편하고 프론트엔드 친화적인 방법으로 진화하였다. 한마디로 JSON-Schema는 초기 형태라는 뜻.

## Validation methods (Joi, Yup, Zod)

### Yup

Yup은 간편한 사용성에 초점을 둔 JSON schema vaildation 라이브러리이다. 객체 스키마를 정의하기 위한 여러 API를 제공하고 있으며, 특히 비동기 유효성 검사 기능도 제공하고 있다.

하지만 간편한 사용성이 주는 명백한 단점인 복잡한 상황에서의 대처 능력이 조금 떨어진다. 또한 대체로 다른 라이브러리에 대한 호환성이 낮다는 의견 또한 무시할 수 없을 것이다.

사용 방법은 아래와 같다.

```
import { object, string } from "yup";
const formSchema = object({
  email: string()
    .required("Please provide an email address")
    .test("email-symbol", "Please include an `@` symbol", (value) => {
      return value.includes("@");
    })
    .test("email-domain", "Please provide an email's domain", (value) => {
      return /@[a-zA-Z]{2,}/gi.test(value);
    })
    .test(
      "email-top-level-domain",
      "Please include top level domain such as .co .org",
      (value) => {
        return /\.[a-zA-Z]{2,}$/gi.test(value);
      }
    )
    .test("email-format", "Invalid email format", (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value);
    })
});
```

### Joi

사실상 프론트엔드 진영 보다는 Node 진영 즉, 백엔드를 위한 JSON 스키마 유효성 검사 툴이라고 할 수 있다. 그래서 그런지, 복잡한 상황에서의 대처 능력이 다른 라이브러리보다 뛰어나다.

그래서 그런지 작은 프로젝트에서는 약간 쓰기 버거울 정도의 크기를 가지고 있다. 그리고 타입스크립트를 통해 타입검증을 하는 과정이 다른 라이브러리 보다 조금 더 복잡할 수 있다.

사용 방법은 아래와 같다.

```
import Joi from "joi";

const validateEmailFn: Joi.CustomValidator<string> = (value, helpers) => {
  console.log("validateEmail", value);
  if (!value) {
    return helpers.message("Please provide an email address");
  }
  if (!value.includes("@")) {
    return helpers.message("Please include an `@` symbol");
  }
  if (!/@[a-zA-Z]{2,}/gi.test(value)) {
    return helpers.message("Please provide an email's domain");
  }
  if (!/\.[a-zA-Z]{2,}$/gi.test(value)) {
    return helpers.message("Please include top level domain such as .co .org");
  }
  return value;
};

const { object, string } = Joi.types();
const formSchema = object.keys({
  email: Joi.any().custom(validateEmailFn, "test")
});
```

### Zod

Yup에서 영감을 받은 zod는 Yup과 달리 Typescript를 위해 만들어진 스키마 유효성 검사 라이브러리라 할 수 있다. Yup과 같이 Typescript를 '고려한' 느낌과는 다르다. 물론 formik과 잘 어울리는 Yup과 같이 zod는 React-hook-form과 잘 어울린다는 특징도 무시할 수 없다.

타입스크립트를 지원하기 위해 나온 라이브러리다 보니, 타입스크립트에 대한 러닝 커브가 조금 있을 수 있다.

사용 방법은 아래와 같다.

```
import { z } from "zod";
const formSchema = z.object({
  email: z
    .string()
    .refine(
      (val) => !!val,
      () => {
        return {
          message: "Please provide an email address"
        };
      }
    )
    .refine((val) => val.includes("@"), {
      message: "Please include an `@` symbol"
    })
    .refine((val) => /@[a-zA-Z]{2,}/gi.test(val), {
      message: "Please provide an email's domain"
    })
    .refine((val) => /\.[a-zA-Z]{2,}$/gi.test(val), {
      message: "Please include top level domain such as .co .org"
    })
});
```
