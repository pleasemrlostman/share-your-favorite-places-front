# CSS in JS VS CSS in CSS

# 개요

현대의 웹사이트는 점점 더 거대해지고 복잡해지고 있다. 그 결과 웹사이트를 스타일해주는 CSS역시 점점 더 복잡해지고 다양한 라이브러리 및 방법론이 생겨났다. 이번 기회에 가장 대표적인 CSS 방법론인 CSS in JS 와 CSS in CSS에 대해 학습해보고 그 차이점과 장단점을 파악해보도록 하자.

# 왜 사용할까?

각 정의와 장단점을 파악하기 전에 왜 해당 방법론이 나왔는지 살펴보도록 하자

첫 번째로 모듈화가 어렵다는 단점이 있다.

두 번째로는 클래스 이름의 최소화 문제이다 물론 BEM과 같은 방법론이 존재하지만 코드 작성단에서 강제할 수 없기 때문에 분명한 한계점이 있다.

세 번째로는 CSS의 우선순위 파악이 어렵다는 문제점이 있다.

물론 CSS도 그간의 발전을 통해서 Pure CSS로 작성한다고 해도 변수 사용, 중첩 사용 등 편의성이 높아진 것도 사실이다. 하지만 그럼에도 현재 개발 환경에서 Pure CSS로 CSS를 작성하는데는 크나큰 비효율성이 존재하기 때문에 CSS in JS 또는 CSS in CSS와 같은 방법론을 사용한다고 생각한다.    

# What is CSS in CSS

우선 먼저 CSS in CSS가 무엇인지 살펴보도록 하자

CSS in CSS 이란 웹 애플리케이션의 스타일을 작성하는 가장 전통적 방법으로, CSS를 별도의 파일이나 HTML 마크업 내에 작성하는 기술이다.

CSS in CSS는 pure CSS와 마찬가지로 **전체 페이지에 필요한 CSS를 처음부터 전부 로딩하여 style 태그를 생성한다**.

하지만 이렇게만 작성하면 크게 와닿지 않을 것이다. CSS in CSS를 실무에서 사용하는 예로 분류하면 아래 3가지 정도로 분류 할 수 있을 것 이다.

1. CSS 전처리기
    - CSS 전처리기는 CSS를 확장한 파일내에서 해당 전처리기의 특별한 문법을 이용해서 CSS를 생성한다.
    - 해당 전처리기를 통해 변수, 함수, 상속 등 일반적인 프로그래밍 언어에서 사용중인 개념들을 이용해 CSS를 작성하여 Pure CSS 보다 더 구조적으로 작성할 수 있다는 장점이 있다.
    - ex) SASS/SCSS, Less, PostCSS, Stylus
2. CSS Framework (Tailwindcss)
    - 미리 정의된 클래스를 이용해 웹 사이트를 스타일한다.
    - 해당 프레임워크에서 미리 클래스를 전부 생성해두었기 때문에 클래스 네이밍에 고민할 필요가 없다.
3. CSS Modules
    - 말 그대로 CSS를 모듈화 하여 사용하는 방식
    - CSS Module안에서 클래스를 만들면 자동으로 고유한 클래스 네임을 만들어 scope를 지역적으로 제한한다.
    - CSS파일이름.module.css 라고 명시해주면 사용 가능

# What is CSS in JS

그렇다면 CSS in JS란 무엇일까? 이는 즉 자바스크립트로 CSS를 제어(작성)하는 방법론이다.

장점으로는 아래와 같다.

1. JS 하나로 CSS까지 작성가능
2. CSS 우선순위 이슈 해결
3. 클래스 이름 최소화
4. 컴포넌트 기반 스타일링

CSS in JS는 자바스크립트로 작성되는 만큼 두개의 동작 방식으로 나뉘는데 runtime 방식과 zero-runtime 으로 나뉜다. 그렇다면 각각의 정의와 장단점을 확인해보자

## runtime 방식

- runtime 방식은 자바스크립트 런타임에서 필요한 CSS를 동적으로 만들어서 사용한다.
- 대표적으로 알려진 라이브러리로는 `styled-component` `emotion` 이 존재한다.
- 개발모드에서는 `<style>` 태그에 style을 추가하는 방식을 사용하고 배포 모드에서는 stylesheet CSSStylesSheet.insertRule 통해 바로 CSSOM에 주입한다.
    - 왜 굳이 CSSOM에 스타일을 추가할까?
        - 브라우저 렌더링 과정에서 DOM 트리의 루트에서 각 노드를 순회하고, 이후 각 노드에 대한 CSSOM 규칙을 찾는 과정을 거친다.
        - 이때 DOM 을 직접 수정할 경우 변경된 사항에 대해 **DOM 트리를 다시 구축**해야 하기 때문에, CSSOM 만을 수정하여 해당 작업을 생략하기 위함이다.
            - `CSSStyleSheet.insertRule()` 메서드를 사용하여 현재 스타일시트에 새로운 스타일을 삽입하는 방식을 쓴다
        - Development Mode 에서는 `<style>` 태그를 주입하여 스타일을 수정하는 방식을 쓴다. (DOM 수정)

### 장점

- CSS-loader가 필요하지 않다.
- 즉 css 파일을 생성하지 않기 때문에 webpack과 같은 번들러에서 css-loader가 필요없다.

### 단점

- 런타임 오버헤드가 발생할 수 있다.
- 즉 런타임에서 동적으로 스타일을 생성하기 때문에 스타일이 수시로 변경되는 스크롤, 드래그 앤 드랍 같은 애니메이션에서 에러가 발생 할 수 있다.

### **Critical CSS**

- 모든 CSS를 초기 렌더링 때 가져오는 방식이 아니라 화면에 필요한 CSS만 로딩하는 방식
    - styled-component 에서는 `ServerStyleSheet.collectStyles` 메서드로 이를 구현한다.
    - emotion 에서는 `extractCritical` 메서드를 통해 필요한 CSS 를 사전에 추출한다.
- 두 방식 모두 서버 사이드 렌더링 (`React.renderToString`) 이 진행될 때 스타일시트를 수집하고 이를 주입하는 형식.

## **zero runtime 방식**

- Build 타임에 미리 CSS를 생성하는 방식
    - 런타임 이전에 미리 필요한 CSS를 빌드할 때 생성하여 제공
    - 이렇게 생성된 CSS는 link 태그를 기반으로 브라우저에 제공
- 동적 스타일링은 사전 정의 스타일로만 가능
- linaria, vanilla-extract

### 장점

- 빌드할 때 CSS와 JS 파일을 병렬로 가지고 오기 때문에 리소스 로딩 시간이 단축된다.
- 런타임에서 스타일이 생성되지 않아 번들러 사이즈가 상대적으로 더 작다
- 복잡한 애니메이션이나 인터렉션이 추가된 웹 사이트 같은 경우 런타임 성능 비용이 비싸지만 zero-runtime 에서는 이러한 고민을 해결할 수 있다

### 단점

- 빌드 할 때  CSS 변환이 필요하기 때문에 별도의 플러그인 설정이 필요
- 동적인 스타일링에 대한 제한이 있다

## 참조하면 좋을 글

[https://pozafly.github.io/css/explore-how-to-apply-modern-css/](https://pozafly.github.io/css/explore-how-to-apply-modern-css/)