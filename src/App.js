import './App.css';

import React from 'react';

function Button(props) {
  // 👇️ Expects single child element
  return React.Children.only(props.children);
}

export default function App() {
  return (
    <Button>
      <>
        <button
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          Click
        </button>
        <button
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          Click
        </button>
      </>
    </Button>
  );
}
