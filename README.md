# Daily`s WebRTC 가이드

> [프로젝트 코드 참고](https://github.com/daily-demos/call-object-react)는 여기서 했음.
코드 보고 공부할 예정.

## 1. Install

```bash
npm install @daily-co/daily-react @daily-co/daily-js recoil
```
Install하는 라이브러리 분석.

1. @daily-co/daily-react와 @daily-co/daily-js 로 나뉘는 이유

Daily React는 React로 사용자 정의 Daily 애플리케이션을 구축할 때 일반적인 패턴을 처리하기 위한 도우미 라이브러리입니다. Daily React를 사용하면 상태를 관리하고 daily-js의 메서드와 이벤트를 어떤 React 앱에서든 쉽게 통합할 수 있습니다.

2. recoil

React 전용으로 만들어진 State Management Library. 유사한 라이브러리 중 가장 유명한 건 Redux가 있습니다. 이러한 상태관리 라이브러리가 쓰이는 이유는 React에서는 `Global State`를 선언할 수 없는데 이를 해결해주는 라이브러리입니다.
> [유튜브 참고](https://www.youtube.com/watch?v=t934FOlOMoM)

## 구조
```bash
index.js -> App.js -> 방생성여부 ? Call, Tray 컴포넌트 : StartButton 컴포넌트

Call -> 웹캠비디오와 오디오, 화면공유 등을 관리
Tray -> 하단 메뉴바
```

## 여담

1. React에서 .env로 환경변수를 가져올 때 주의할 점

- 환경변수 이름은 `REACT_APP_`으로 시작해야 한다.
- 따로 dotenv를 설치할 필요없이, `process.env.환경변수이름`으로 바로 접근하면 된다.