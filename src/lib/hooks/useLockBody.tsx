// hooks/useLockedBody.js
import { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const useLockedBody = (initialLocked = false) => {
  const [locked, setLocked] = useState(initialLocked);

  useEffect(() => {
    if (locked) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }

    return () => enableBodyScroll(document.body); // Clean up on unmount
  }, [locked]);

  return [locked, setLocked];
};