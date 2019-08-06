import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Allows for easy usage and cleanup of intervals in a hook-fashion
 * 
 * Prints hello-world every one second
 * useInterval(() => console.log('hello-world'), 1000)
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/**
 * Toogle between true and false
 * @param {boolean} initialValue 
 */
export function useToggle(initialValue) {
  const [toggleValue, setToggleValue] = useState(initialValue);
  const toggler = useCallback(() => setToggleValue(!toggleValue));

  return [toggleValue, toggler];
}