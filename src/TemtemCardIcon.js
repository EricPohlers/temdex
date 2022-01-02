import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

export default function TemtemCardIcon(props) {
  const handlers = useSwipeable({
    onSwipedRight: () => (props.data.luma ? props.swipe('icon') : null),
    onSwipedLeft: () => (props.data.luma ? props.swipe('lumaIcon') : null),
  });

  return (
    <motion.div
      animate={
        props.data.icon === 'icon'
          ? {
              opacity: [0, 1],
            }
          : { opacity: [0, 1.1] }
      }
      transition={{ duration: 0.3 }}
      className="w-full -my-11 min-h-10"
      {...handlers}
    >
      <img
        className={
          props.data.icon === 'icon' && props.data.iconUrl.icon === ''
            ? 'rounded-t-lg blur-lg w-full snap-start shrink-0 grow-1'
            : 'rounded-t-lg w-full snap-start shrink-0 grow-1'
        }
        alt="temtem"
        variant="top"
        src={
          props.data.iconUrl[props.data.icon] !== ''
            ? `https://temtem-api.mael.tech/${
                props.data.iconUrl[props.data.icon]
              }`
            : 'https://temtem-api.mael.tech//images/portraits/temtem/large/Tuwai.png'
        }
      />
      <div className="bg-neutral-800 opacity-80 w-full text-center text-xl font-mono py-1 -mt-11 mb-11 text-white">
        {props.data.name}
      </div>
    </motion.div>
  );
}
