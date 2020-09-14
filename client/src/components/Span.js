import React from 'react';

export default function Span({ label, number, color }) {
  return (
    <div className="col s3 center">
      {label}: <span className={color}>{number}</span>
    </div>
  );
}
