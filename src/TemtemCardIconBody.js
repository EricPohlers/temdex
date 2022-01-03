import React from 'react';
import TemtemCardIcon from './TemtemCardIcon';
import TemtemCardIconName from './TemtemCardIconName';

export default function TemtemCardIconBody(props) {
  return (
    <div className='className="w-full -my-11 min-h-10"'>
      <TemtemCardIcon data={props.data} swipe={props.swipe} />

      <TemtemCardIconName name={props.data.name} />
    </div>
  );
}
