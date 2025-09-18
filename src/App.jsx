import Users from './components/Users'
import './App.css'
import { Suspense } from 'react';
// import { useState } from 'react';



const App = () => {

  // set count:

// const [count,setCount] = useState(0);

const fetchUrl = 'https://fake-json-api.mock.beeceptor.com/users';

const userPromise = fetch(fetchUrl).then((res) => {
  return res.json();
});

console.log(userPromise);

// const handleCounter = () => {
//   setCount(count + 5 );
// }


  // const handleLogin = (value) => {
  //   let count = 0;
  //   count = count + value ;
  //   console.log(count);
  // };

  // function handleIncrease() {
  //   console.log('clicked');
  //  }

  return (
    <>
<Suspense fallback={'loading....'}>
 <Users userPromise={userPromise}></Users>
</Suspense>

   

{/* set count */}
{/* 
<h1>
  {count}
</h1>
<button onClick={handleCounter}>increase</button> */}

    {/* <h1>hello duniya</h1>
    <button onClick={() => handleLogin(5)}>Increase</button>
    <button onClick={handleIncrease}>Increase button</button>
      <Users></Users> */}
    </>
  );
};



export default App
