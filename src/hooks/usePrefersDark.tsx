import { useEffect, useLayoutEffect, useState } from 'react';

export function usePrefersDark(): boolean {
  const [prefersDark, setPrefersDark] = useState(false);

  const onChange = ({ matches }: MediaQueryListEvent): void =>
    setPrefersDark(matches);

  // Shut up console warning by using useEffect on server, but useLayoutEffect on browser
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // We running server-side, so we can't check nuffin.
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      return;
    }

    const prefersDarkMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    // Initiate on first client side run
    setPrefersDark(prefersDarkMediaQuery.matches);

    // And catch if it ever changes
    prefersDarkMediaQuery.addEventListener('change', onChange);

    return (): void => {
      prefersDarkMediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return prefersDark;
}
