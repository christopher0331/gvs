import React, { useState } from 'react';

export const SemiCircle = () => {
  const viewBox = '0 0 100 100';
  const r = 50 * .25;
  const cx = 50;
  const cy = 50;
  let startAngle = 0;
  const endAngle = 360 / 7;
  const gap = 2;
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  const [selectedSegment, setSelectedSegment] = useState(null);

  const handleClick = (i) => {
    setSelectedSegment(i);
  };

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  let x1, y1, x2, y2;
  let d = '';
  let pathElements = [];

  for (let i = 0; i < 7; i++) {
    x1 = cx + r * Math.cos(Math.PI * startAngle / 180);
    y1 = cy + r * Math.sin(Math.PI * startAngle / 180);
    x2 = cx + r * Math.cos(Math.PI * (startAngle + endAngle) / 180);
    y2 = cy + r * Math.sin(Math.PI * (startAngle + endAngle) / 180);
    d = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
    pathElements.push(
      <path
        key={i}
        d={d}
        fill="none"
        stroke={colors[i]}
        onClick={() => handleClick(i)}
        cursor='pointer'
      />
    );
    startAngle += endAngle + gap;
  }

  return (
    <>
      <svg viewBox={viewBox}>
        {pathElements}
      </svg>
      {selectedSegment !== null && <div>Segment: {selectedSegment + 1}</div>}
    </>
  );
};
