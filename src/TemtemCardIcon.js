import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

export default function TemtemCardIcon(props) {
  const handlers = useSwipeable({
    onSwipedRight: () => props.swipe('icon'),
    onSwipedLeft: () => props.swipe('lumaIcon'),
  });

  const variants = {
    icon: { opacity: 1, x: 0 },
    luma: { opacity: 0, x: '-100%' },
  };

  return (
    <motion.div
      animate={
        props.data.icon === 'icon'
          ? {
              opacity: [0, 1],
            }
          : { opacity: [0, 1.1] }
      }
      transition={{ duration: 1 }}
      className="w-full -my-11"
      {...handlers}
    >
      <motion.img
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
    </motion.div>
  );
}
