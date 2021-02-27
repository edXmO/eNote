import React, { useState } from 'react';
import '../sass/main.scss';

// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';

const App = () => {

 const [swiper, setSwiper] = useState(0);

  return (
    <div className="container">
      <Controls swiper={swiper} />
      <Content handleSwiperInstance={setSwiper}/>
    </div>
  );
};

export default App;
