# Daily`s WebRTC 가이드

> [프로젝트 코드 참고](https://github.com/daily-demos/call-object-react)는 여기서 했음.
코드 보고 공부할 예정.

## 1. Install

```bash
npm install @daily-co/daily-react @daily-co/daily-js recoil
```
Install하는 라이브러리 분석.

1. @daily-co/daily-react와 @daily-co/daily-js 로 나뉘는 이유

@daily-co/daily-js와 recoil을 별도로 설치하는 이유는 그들이 서로 의존성(dependency) 관계에 있기 때문입니다. 이렇게 함으로써 daily-react 외에 recoil이나 daily-js를 사용하여 자체 호출 객체(call object)를 만들고 싶다면, 수동으로 사용하는 부분과 daily-react가 각 라이브러리의 동일한 버전을 사용할 수 있도록 보장할 수 있습니다.

2. recoil

React 전용으로 만들어진 State Management Library. 유사한 라이브러리 중 가장 유명한 건 Redux가 있습니다. 이러한 상태관리 라이브러리가 쓰이는 이유는 React에서는 `Global State`를 선언할 수 없는데 이를 해결해주는 라이브러리입니다.
> [유튜브 참고](https://www.youtube.com/watch?v=t934FOlOMoM)

## 여담

1. React에서 .env로 환경변수를 가져올 때 주의할 점

- 환경변수 이름은 `REACT_APP_`으로 시작해야 한다.
- 따로 dotenv를 설치할 필요없이, `process.env.환경변수이름`으로 바로 접근하면 된다.