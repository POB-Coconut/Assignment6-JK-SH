# Wanted Front-end onBoarding # 6

## Demo Link

🔗 Demo Page : [https://jaranda-coco.netlify.app/](https://jaranda-coco.netlify.app/)

## 💬 프로젝트 개요

SolarConnect :
- 소팅 기능을 가진 서비스입니다.
- 숫자를 스트링으로 입력 받고, 버튼을 누르면 결과가 나타납니다.

## 😀 프로젝트 Memebers

| 이름   | GitHub                                    | 담당                                                           |
| ------ | ----------------------------------------- | -------------------------------------------------------------- |
| 이제경 | [jejelee94](https://github.com/jejelee94) | Admin: 데이터테이블 /검색기능 계정추가                         |
| 이상훈 | [simoniful](https://github.com/simoniful) | Login/Singup: input, form 커스텀 훅, 유효성 검증               |

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

- React, React Router, Styled Components, ES6+

## 🐱‍👤 협업 Tool

- Slack, Git-Hub

## 👍🏻 구현 기능 상세

사용자는 회원가입 및 로그인을 통해 userType별 다른 메뉴를 가진 페이지를 볼 수 있다.
Admin 계정으로 로그인을 통해 userInfo를 관리하고 관련 데이터 시각화를 볼 수 있다.

### 1. 기본 요구 사항

> - 필수 포함 userInfo : 이름 / 주소 (팝업을 이용해서 입력받음) / 신용카드 정보 (팝업을 이용해서 입력받음) / 나이
> - LocalStorage를 사용해서 정보 저장 및 관리
> - 외부 API를 사용하지 않고, Client의 리소스만 사용합니다.
> - 관리자 로그인 시 페이지 내 필수 요소 : Data Table / userInfo 페이지네이션 / 검색기능

> ### 과제 구현 목록
>
> - [x] 잘못된 형식의 입력데이터는 예외처리하여 사용
> - [x] 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현
> - [x] ReactJS로 구현
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
 ┃ ┣ 📜customSort.js
 ┃ ┗ 📜mergeSort.js
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┗ 📜index.js
```

#### 공통 component

> - Form, Result, TImer
> - Utils 내 custom sort

### 3. 페이지 상세 기능

#### Timer

> - 페이지 상 / 하단에 한국 / 미국 지역 시간 표기(한국 표준시 기준)

#### Form

> -  “숫자,숫자,숫자…” 형식으로 사용자 입력
> - 잘못된 형식 데이터 예외처리
> - 버튼 클릭시 소팅 시작
> - 오름차순 / 내림차순 시간 차 보여주기

#### Result

> - “숫자,숫자,숫자…” 형식으로 데이터 보여주기
> - 첫 번째 결과 필드에선 오름차순 결과 보여주기
> - 두 번째 결과 필드에선 오름차순 결과 보여주기

## Reference

- 이 프로젝트는 [솔라커넥트]()의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이프로젝트에서 사용하고 있는 data는 솔라커넥트 측에서 제공받았습니다.
- 참고 사이트

| 사이트 링크                               | 내용                                                          |
| -----------------------| ----------------------------------------------|
| [site 1](https://github.com/) | desc                      |
| [site 2](https://github.com/) | desc             |

---