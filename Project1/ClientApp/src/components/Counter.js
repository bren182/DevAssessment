import React, { useState } from 'react';

const Counter = () => {


    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong></strong></p>

        <button className="btn btn-primary">Increment</button>
      </div>
    );
}

export default Counter;