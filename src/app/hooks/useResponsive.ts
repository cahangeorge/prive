'use client';

import { useState, useEffect } from 'react';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface WindowSize {
  width: number;
  height: number;
}

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default function useResponsive() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Only execute this on the client
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const isAboveBreakpoint = (breakpoint: BreakpointType): boolean => {
    return windowSize.width >= breakpoints[breakpoint];
  };

  const isBelowBreakpoint = (breakpoint: BreakpointType): boolean => {
    return windowSize.width < breakpoints[breakpoint];
  };

  const isBetweenBreakpoints = (min: BreakpointType, max: BreakpointType): boolean => {
    return windowSize.width >= breakpoints[min] && windowSize.width < breakpoints[max];
  };

  const isMobile = (): boolean => {
    return windowSize.width < breakpoints.md;
  };

  const isTablet = (): boolean => {
    return windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  };

  const isDesktop = (): boolean => {
    return windowSize.width >= breakpoints.lg;
  };

  return {
    windowSize,
    isAboveBreakpoint,
    isBelowBreakpoint,
    isBetweenBreakpoints,
    isMobile,
    isTablet,
    isDesktop,
  };
}