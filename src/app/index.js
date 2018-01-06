import React from 'react';
import ReactDOM from 'react-dom';
import Component_one from './components/Component_one';
import Component_two from './components/Component_two';

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Component_one />
        </div>
        <div>
          <Component_two />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
