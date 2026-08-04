import { useEffect, useState } from 'react';
import type { Plano } from '../components/PlanosGrid';
import { fetchPlanos } from '../lib/produtosApi';

export function usePlanos(fallback: Plano[], popularCapital = '100.000') {
  const [planos, setPlanos] = useState<Plano[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchPlanos(popularCapital)
      .then((data) => {
        if (!cancelled) setPlanos(data);
      })
      .catch(() => {
        if (!cancelled) setPlanos(fallback);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [fallback, popularCapital]);

  return { planos, loading };
}
