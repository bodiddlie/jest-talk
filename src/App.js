import React, { Component } from 'react';

import {LoremList} from './lorem-list';

class App extends Component {
  render() {
    return (
      <div>
        <LoremList paragraphCount={10} />
      </div>
    );
  }
}

export default App;
