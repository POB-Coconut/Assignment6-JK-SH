# Wanted Front-end onBoarding # 6

## Demo Link

🔗 Demo Page : [https://solar-connect.netlify.app/](https://solar-connect.netlify.app/)

## 💬 프로젝트 개요

SolarConnect :
- 소팅 기능을 가진 서비스입니다.
- 숫자를 스트링으로 입력 받고, 버튼을 누르면 결과가 나타납니다.

## 😀 프로젝트 Memebers

| 이름   | GitHub                                    | 담당                                                           |
| ----- | ----------------------------------------- | -------------------------------------------------------------- |
| 이제경 | [jejelee94](https://github.com/jejelee94) | custom sorting 알고리즘, netlify 배포, component 구성              |
| 이상훈 | [simoniful](https://github.com/simoniful) |  useForm 훅 구성, 레이아웃, legacy sorting 알고리즘, 프로젝트 설계             |

## 🪄 실행 방법

#### Project setup

`npm install`

#### Compiles and hot-reloads for development

`npm run serve`

#### Compiles and minifies for production

`npm run build`

#### Test

`npm run test`

## 🔧 Skills

- React, Styled Components, ES6+

## 🐱‍👤 협업 Tool

- Slack, Git-Hub

## 👍🏻 구현 기능 상세

사용자는 수열을 입력하고, 버튼 클릭 시 오름차순 / 내림차순으로 정렬된 값을 볼 수 있습니다. 

### 1. 기본 요구 사항

> - Timer는 재활용이 가능한 Component로 구성합니다.
> - 사용자가 버튼을 누르면 소팅이 시작됩니다.
> - 오름차순 결과는 결과 필드에 바로 노출 되고 3초 후에 내림차순 결과가 결과필드에 노출됩니다.
> - 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.

> ### 과제 구현 목록
>
> - [x] 잘못된 형식의 입력데이터는 예외처리하여 사용
> - [x] 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현
> - [x] 레이아웃은 그림을 참고하되, UI 및 UX는 작성자 편의에 맞게 구현
> - [x] 과제 수행중에 참고했던 사이트가 있다면 README.md 파일에 출처를 기입

### 2. 공통 컴포넌트 와 프로젝트 구조

#### 프로젝트 구조

```html
📦src
 ┣ 📂components
 ┃ ┣ 📜Form.js
 ┃ ┣ 📜Result.js
 ┃ ┗ 📜Timer.js
 ┣ 📂hooks
 ┃ ┗ 📜useForm.js
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.js
 ┣ 📂utils
 ┃ ┣ 📜config.js
 ┃ ┣ 📜customSort.js
 ┃ ┗ 📜mergeSort.js
 ┣ 📜App.js
 ┗ 📜index.js
```

#### 공통 component

> - Form, Result, TImer
> - Utils 내 custom sort

### 3. 페이지 상세 기능

#### Timer

> - 페이지 상 / 하단에 한국 / 미국 지역 시간 표기(한국 표준시 기준)

#### Form

> - “숫자,숫자,숫자…” 형식으로 사용자 입력
> - 잘못된 형식 데이터 예외처리
> - 버튼 클릭시 소팅 시작
> - 오름차순 / 내림차순 시간 차 보여주기

#### Result

> - “숫자,숫자,숫자…” 형식으로 데이터 보여주기
> - 첫 번째 결과 필드에선 오름차순 결과 보여주기
> - 두 번째 결과 필드에선 내림차순 결과 보여주기

## Reference

- 이 프로젝트는 [솔라커넥트]()의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이 프로젝트에서 사용하고 있는 data는 솔라커넥트 측에서 제공받았습니다.
- 참고 사이트

| 사이트 링크    | 내용        |
| -----------------------| ----------------------------------------------|
| [JS Sorting 알고리즘 & 데이터 구조](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/index.php) | 병합 정렬 및 알고리즘 기본 개념   |
| [배열 내 공백 다루기](https://hianna.tistory.com/423) | trucy & falsy 개념 및 공백처리 |

---
