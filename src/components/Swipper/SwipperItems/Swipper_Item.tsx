import './Swipper_Item.scss';
import React from 'react';

type Props = {
  title: string;
  width: number;
  maxwidth: number;
  id: number;
};

const Swipper_Item = ({ title, width, maxwidth, id }: Props) => {
  function randColor() {
    const r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }

  return (
    <div
      className='swipper__item'
      style={{ minWidth: `${width}px`, maxWidth: `${maxwidth}px`, background: randColor() }}
    >
      <p className='swipper__item__title'>
        {title} ID={id}
      </p>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Swipper_Item);
