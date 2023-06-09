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

- StartButton에서 참가버튼을 누르면, App.js의 createCall()함수가 작동하고
- 생성된 방url을 startJoiningCall(url)에 넘겨준다.
- url이 정상일 때, callObject를 생성하고,
- appState가 STATE_JOINING으로 바뀌면서 화상통화모드로 바뀜.

## API

POST요청  
url : https://api.daily.co/v1/rooms  
header Authorization에는 API Token값을 넣어주면 됨.

```json
{
    "properties": {
        "exp": "exp",
    },
}
```

body는 Json 형태로 생성된 방이 만료되는 시간을 명시해줘야한다.

## Daily SDK 용어

- **url** : 생성된 방에 접속하기 위한 주소. 
- **Local** : 로컬은 각 클라이언트입장에서 자기 자신을 의미한다. 이해를 돕기 위해, 화상미팅을 위해서는 각자의 화상영상이 공유되어야 하는데 이때 자기자신에게 자신의 영상을 인터넷에서 받을 필요가 없다. 그런 의미에서 구분하기 위해, `Local`이라는 단어를 사용한다.

## CallObject

## 여담

1. React에서 .env로 환경변수를 가져올 때 주의할 점

- 환경변수 이름은 `REACT_APP_`으로 시작해야 한다.
- 따로 dotenv를 설치할 필요없이, `process.env.환경변수이름`으로 바로 접근하면 된다.