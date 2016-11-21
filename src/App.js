import React, { Component } from 'react';

import {LoremList} from './lore-list';

class App extends Component {
  render() {
    return (
      <div>
        <LoremList paragraphCount={5} />
      </div>
    );
  }
}

export default App;
