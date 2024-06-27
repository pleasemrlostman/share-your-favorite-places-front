# JavaScript/TypeScript Data Validation

데이터 검증은 웹 개발에서의 중요한 측면으로, 입력되는 데이터가 정확하고 신뢰할 수 있는지 확인합니다. JavaScript 및 TypeScript에서는 여러 라이브러리가 이 작업에 도움이 될 수 있으며 Zod, Yup 및 Joi가 가장 인기가 있습니다. 따라서 해당 문서에서는 Zod, Yup, Joi 간의 차이점과 기능, 사용 사례 및 성능 고려 사항을 살펴봅니다.

## TypeScript만으로는 유효성 검증이 되지 않는 이유

    타입스크립트는 애플리케이션 내에서 빌드 시 모든 타입을 검사하여 코드의 오류를 방지하지만 외부 소스에는 타입이 지정되지 않은 API의 JSON 또는 사용자 입력이 포함될 수 있습니다.

유형이 지정되지 않은 런타임 데이터를 가져와도 유형을 확실하게 확인할 수 있지만 이를 위해서는 스키마를 생성하고 스키마에 대해 유형이 지정되지 않은 데이터를 구문 분석해야 합니다.

# Zod, Yup, Joi 비교

## Zod

    Zod는 유형 추론과 단순성을 강조하는 TypeScript 우선 스키마 선언 및 유효성 검사 라이브러리입니다. 데이터 무결성을 보장하기 위해 유형 시스템을 활용하여 TypeScript 개발자에게 원활한 환경을 제공하도록 설계되었습니다.

#### 특징

    - 유형 추론: Zod는 스키마 정의에서 직접 TypeScript 유형을 생성하여 유형 안전성을 보장합니다.
    - 체인 가능한 API: API는 직관적이며 복잡한 스키마를 구축하기 위한 체인 방법을 허용합니다.
    - TypeScript와의 통합: TypeScript와의 긴밀한 통합으로 탁월한 유형 추론 및 자동 완성 기능을 제공합니다.
    - 스키마 구성: 복잡한 데이터 구조를 생성하기 위한 스키마 구성을 지원합니다.
    - 사용자 정의 오류 메시지: 사용자 정의 오류 메시지 및 변환을 허용합니다.

#### 코드

```
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
  email: z.string().email(),
});

type User = z.infer<typeof userSchema>;

const result = userSchema.safeParse({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
});
```

## Yup

    Yup은 값 구문 분석 및 유효성 검사를 위한 JavaScript 스키마 빌더입니다. Joi에서 영감을 얻었지만 브라우저와 Node.js용으로 설계되었습니다. 유연하고 사용하기 쉬우므로 React 애플리케이션의 양식 검증에 널리 사용됩니다.

#### 특징

    - 스키마 정의: 모든 JavaScript 개체 또는 기본 유형에 대한 스키마를 정의합니다.
    - 조건부 유효성 검사: 조건부 및 동적 유효성 검사 규칙을 지원합니다.
    - 비동기 유효성 검사: 비동기 유효성 검사를 처리하며 외부 소스에 대해 데이터를 확인하는 데 유용합니다.
    - 양식 라이브러리와의 통합: Formik과 같은 양식 라이브러리와 잘 작동합니다.
    - 사용자 정의 검증: 사용자 정의 검증 방법을 생성하기 위한 메커니즘을 제공합니다.

#### 코드

```
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.number().min(18).required(),
  email: Yup.string().email().required(),
});

userSchema.validate({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
}).then(function(value) {
  console.log(value);
}).catch(function(err) {
  console.log(err.errors);
});
```

## Joi

    Joi는 JavaScript를 위한 강력한 스키마 설명 언어이자 데이터 유효성 검사기입니다. 이는 hapi 생태계의 일부이며 강력한 기능 세트와 광범위한 검증 기능으로 유명합니다.

### 특징

    - 다양한 유효성 검사 규칙: 모든 데이터 유형에 대한 포괄적인 유효성 검사 규칙 세트를 제공합니다.
    - 스키마 구성: 스키마 구성 및 확장을 지원합니다.
    - 사용자 정의 유효성 검사기: 사용자 정의 유효성 검사 논리를 허용합니다.
    - 오류 보고: 사용자 정의 가능한 메시지로 상세한 오류 보고.
    - 비동기 유효성 검사: 비동기 유효성 검사 시나리오를 처리합니다.

### 코드

```
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().min(18).required(),
  email: Joi.string().email().required(),
});

const { error, value } = userSchema.validate({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
});

if (error) {
  console.log(error.details);
} else {
  console.log(value);
}
```

## 결론

프로젝트의 특정 요구 사항과 상황을 고려하여 JavaScript 또는 TypeScript용 데이터 검증 라이브러리를 선택합니다.
(현재 가장 많이 사용하는 건 Zod이긴 합니다..)

- Zod는 유형 안전성과 추론이 중요한 TypeScript 중심 프로젝트에 이상적입니다.
- Yup 특히 양식 검증 요구 사항이 있는 React 애플리케이션에서 유연성과 사용 편의성의 적절한 균형을 제공합니다.
- Joi는 복잡한 검증 시나리오, 특히 강력한 기능 세트를 완전히 활용할 수 있는 Node.js 환경에 가장 적합합니다.
