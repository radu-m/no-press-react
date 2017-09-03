import React from 'react';

const Home = (props) => {
  console.log('!!!!',props)
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <json2html content={props.content} />

    </div>
  );
};

export default Home;
