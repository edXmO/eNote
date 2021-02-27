import React from 'react';
import '../sass/main.scss';

// Components
import Controls from './Controls/Controls';
import Searchbar from './Searchbar/Searchbar';
import Notes from './Notes/Notes';

const App = () => {
  return (
    <div className="container">
      <Controls />
      <Searchbar />
      <Notes />
    </div>
  );
};

export default App;
