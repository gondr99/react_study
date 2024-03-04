//이미지도 이런식으로 임포트가 가능하다. 이러면 빌드시 경로를 알아서 바꿔줍니다.
import Header from './components/Header/Header.jsx';

import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
  

  // <Fragment> 를 대신하는 게 <>, 신버전 리액트만 가능. 
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
