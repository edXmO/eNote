import React from 'react';
import '../sass/main.scss';

// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';

const App = () => {
  return (
    <div className="container">
      <Controls />
      <Content/>
    </div>
  );
};

export default App;
