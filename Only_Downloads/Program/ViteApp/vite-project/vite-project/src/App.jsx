import React, { Suspense } from "react";
const LazyComponent = React.lazy(() => import("./MyLazyComponent"));

const Display = () => {
  return (
    <div>
      <h1 style={{color:"red"}}>I am here</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Display />
      <h1>Samaresh shil</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
