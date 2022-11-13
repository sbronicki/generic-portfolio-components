import React, { createContext, useEffect, useState } from "react";

interface MobileContextInterface {
  isMobile: boolean;
  windowWidth: number;
}

export const MobileContext = createContext<any>(undefined);

export const MobileProvider = ({ children }: any) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(windowWidth < 1000);

  const onResize = ({ target }: any) => {
    setWindowWidth(target.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, []);
  useEffect(() => {
    const _isMobile = windowWidth < 1000;
    if ((_isMobile && !isMobile) || (!_isMobile && isMobile)) {
      setIsMobile(_isMobile);
    }
  }, [windowWidth]);

  return (
    <MobileContext.Provider
      value={{ isMobile: isMobile, windowWidth: windowWidth }}
    >
      {children}
    </MobileContext.Provider>
  );
};
