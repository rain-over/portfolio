import { createElement } from 'react';
import { motion } from 'framer-motion';

const prox = new Proxy(
  {},
  {}
  // {
  //   get: (_, tagName) => {
  //     return ({ children, ...props }) => {
  //       console.log(process.env.DISABLE_MOTION);
  //       if (true) {
  //         if (props?.transition?.delay) {
  //           props.transition.delay = 0;
  //         }
  //         if (props?.transition?.duration) {
  //           props.transition.duration = 0;
  //         }

  //         return createElement(tagName, props, children);
  //       }

  //       return createElement(motion[tagName], props, children);
  //     };
  //   },
  // }
);

export default prox;
