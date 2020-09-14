import React from 'react';

export default function ({ icon, text, align }) {
  return (
    <a className="waves-effect waves-light btn" href="/#">
      <i className={align}>{icon}</i>
      {text}
    </a>
  );
}
