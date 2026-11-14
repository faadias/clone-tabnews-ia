import Confete from "./confete";

async function buscarTotalDeConteudos() {
  try {
    const resposta = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      {
        // Revalida no máximo a cada 60s: a página fica estática e não espera a API a cada acesso
        next: { revalidate: 60 },
        // Não deixa uma API lenta segurar a renderização
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!resposta.ok) return null;
    const total = Number(resposta.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await buscarTotalDeConteudos();

  return (
    <main>
      <Confete />
      <h1>Em construção</h1>
      <p>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>
      <p className="total">
        {total === null
          ? "Não foi possível carregar o total de conteúdos publicados."
          : `${total.toLocaleString("pt-BR")} conteúdos publicados no TabNews`}
      </p>
      <a href="https://www.tabnews.com.br">Acesse o TabNews oficial</a>
    </main>
  );
}
