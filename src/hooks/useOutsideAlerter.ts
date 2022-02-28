import React, {useEffect} from 'react';

function useOutside(
  ref: React.RefObject<HTMLDivElement>,
  close: (arg: boolean) => void,
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref) {
        if (ref.current && !ref.current.contains(event.target)) {
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
