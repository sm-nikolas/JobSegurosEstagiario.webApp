import type { Plano } from '../components/PlanosGrid';
import { siteConfig } from '../config/site';

export interface ProdutoApi {
  id: number;
  capital_segurado: string;
  premio_bruto: string;
  quantidade_numero_sorte: number;
}

function formatMoeda(value: string): string {
  let formatted = value.replace(/^R\$\s*/, '').trim();
  if (formatted.endsWith(',00')) {
    formatted = formatted.slice(0, -3);
  }
  return formatted;
}

export function mapProdutosToPlanos(
  produtos: ProdutoApi[],
  popularCapital = '100.000',
): Plano[] {
  return produtos.map((produto, index) => {
    const capital = formatMoeda(produto.capital_segurado);
    return {
      id: produto.id,
      nome: `PLANO ${index + 1}`,
      capital,
      quantidade: produto.quantidade_numero_sorte,
      premio: formatMoeda(produto.premio_bruto),
      popular: capital === popularCapital,
    };
  });
}

export async function fetchPlanos(popularCapital = '100.000'): Promise<Plano[]> {
  const response = await fetch(siteConfig.produtosApiUrl);

  if (!response.ok) {
    throw new Error(`Erro ao buscar planos (${response.status})`);
  }

  const produtos: ProdutoApi[] = await response.json();
  return mapProdutosToPlanos(produtos, popularCapital);
}
