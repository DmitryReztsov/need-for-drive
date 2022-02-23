import React, {useEffect} from 'react';

function useOutside(ref: React.RefObject<HTMLDivElement>, close: (arg: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref && !event.target.closest('ul')) {
        if (ref.current && !event.target.closest('label')) {
          close(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutside;
