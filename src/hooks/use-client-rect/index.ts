import { useState, useCallback, LegacyRef } from 'react';

function useClientRect (deps?: any): [DOMRect | undefined, LegacyRef<any>] {
  const [rect, setRect] = useState<DOMRect>();

  const ref = useCallback((node: HTMLElement) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, [deps]);

  return [rect, ref];
}

export default useClientRect;
