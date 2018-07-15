import React from 'react';

const Title = () => {
  return (
    <div className="title-container">
      <div className="title-innerContainer">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/d572e4e96f680e3f07482265cc0e3900cebc9056/3cc56/images/logo_urbanplate-d572e4e9.svg"
          width="150"
          className="title-logo"
          alt="Logo urbanplate"
        />
        <h2 className="title-about">
          Modern, delicious and creative vego food.<br />
          This isn’t your usual vegetarian site.
        </h2>
      </div>
    </div>
  );
};

export default Title;
