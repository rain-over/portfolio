import { createContext, useContext } from 'react';
import { useWindowSize } from '@/../lib/hooks';

export const IsSsrMobileContext = createContext(false);

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;

  return isSsrMobile || isBrowserMobile;
};
