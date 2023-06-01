# Daily`s WebRTC 가이드

> [프로젝트 코드 참고](https://github.com/daily-demos/call-object-react)는 여기서 했음.
코드 보고 공부할 예정.

## 1. Install

```bash
npm install @daily-co/daily-react @daily-co/daily-js recoil
```

## 여담

1. React에서 .env로 환경변수를 가져올 때 주의할 점

- 환경변수 이름은 `REACT_APP_`으로 시작해야 한다.
- 따로 dotenv를 설치할 필요없이, `process.env.환경변수이름`으로 바로 접근하면 된다.