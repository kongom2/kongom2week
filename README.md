# kongom2week

개인 프로젝트, 나의 일주일 평점남기기

### 프로젝트 URL

- http://kongom2project.s3-website.ap-northeast-2.amazonaws.com/

### 개인 공부 내용

- 컴포넌트
- 리액트 요소
- 이벤트 관리
- 라우팅
- 유사배열

### 사용한 라이브러리

- npm install create-react-app
- npm install react-router-dom styled-components

### 사용한 리액트 훅

- 참조 사이트 : https://velog.io/@yiyb0603/React-Router-dom%EC%9D%98-%EC%9C%A0%EC%9A%A9%ED%95%9C-hooks%EB%93%A4
- useHistory : 리액트 어플리케이션 내에서 라우팅이 가능
- useParams : path parameter의 정보를 얻을 수 있는 hooks
- useState : 변화하는 값 관리

### 소스 파일

- 참조사이트 : https://velog.io/@khw970421/React-%ED%8C%8C%EC%9D%BC%EB%93%A4%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-index.js-App.js-index.html
- index.js : 메인프로그램, 여기에서 HTML 템플릿 및 JavaScript의 컴포넌트를 조합하여 렌더링하고 실제 표시한다.
- App.js : 컴포넌트를 정의하는 프로그램, 실제로 화면에 표시되는 내용 등은 여기에서 정의된다.
- index.html : 메인프로그램인 index.js에 대응되는 파일, 파일이 직접 표시되는 것은 아니고, index.js에 의해 일어 와서 렌더링된 결과가 표시된다. (index.html 이름을 바꿀시 오류발생)
- Main.js : 일주일 평점 첫 화면
- Rating.js : 평점 남기기 화면
