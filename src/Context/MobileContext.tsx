import React, { createContext, useEffect, useState } from "react";

interface MobileContextInterface {
  isMobile: boolean;
  windowWidth: number;
}

export const MobileContext = createContext<MobileContextInterface | null>(null);

export const MobileProvider = ({ children }: any) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(windowWidth < 768);

  const onResize = ({ e }: any) => {
    setWindowWidth(e.target.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, []);
  useEffect(() => {
    const _isMobile = windowWidth < 768;
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
