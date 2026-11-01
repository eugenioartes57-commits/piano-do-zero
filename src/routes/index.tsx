import { createFileRoute } from "@tanstack/react-router";

const CHECKOUT =
  "https://standerpay.com/checkout/825b3f44-2ede-4002-8d0c-b2fe672687de?preview=1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Piano do Zero — A Tua Primeira Melodia | Guia em PDF" },
      {
        name: "description",
        content:
          "Guia introdutório em PDF para iniciantes reconhecerem notas no piano ou teclado e organizarem a prática. 2.500 Kz.",
      },
      { property: "og:title", content: "Piano do Zero — A Tua Primeira Melodia" },
      {
        property: "og:description",
        content: "Seis etapas ilustradas, exercícios simples e um plano de prática em sete sessões.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Keyboard({ className = "" }: { className?: string }) {
  const whites = Array.from({ length: 8 });
  const blacks = [0, 1, 3, 4, 5];
  return (
    <svg viewBox="0 0 320 140" className={className} role="img" aria-label="Ilustração de teclado de piano">
      <rect x="0" y="0" width="320" height="140" rx="14" className="fill-primary" />
      {whites.map((_, i) => (
        <rect key={i} x={12 + i * 37} y={14} width={34} height={112} rx={5} className={i === 0 ? "fill-coral" : "fill-card"} />
      ))}
      {blacks.map((b) => (
        <rect key={b} x={12 + b * 37 + 24} y={14} width={22} height={68} rx={4} className="fill-foreground" />
      ))}
      <text x="29" y="116" textAnchor="middle" className="fill-coral-foreground" fontSize="13" fontWeight="700">Dó</text>
    </svg>
  );
}

function Cta({ children = "Quero o guia — 2.500 Kz" }: { children?: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coral px-6 py-3 text-center text-base font-bold text-coral-foreground shadow-md transition hover:brightness-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:w-auto"
    >
      {children}
    </a>
  );
}

function PreviewNotice() {
  return (
    <p className="mt-3 rounded-xl border border-coral/50 bg-coral/10 px-4 py-3 text-sm text-foreground">
      <strong>Atenção:</strong> o checkout está em pré-visualização e o produto pode ainda estar em revisão. Os
      pagamentos só ficam disponíveis após a aprovação do produto.
    </p>
  );
}

const steps = [
  ["Conhecer o teclado", "Perceber o padrão das teclas brancas e pretas."],
  ["Encontrar o Dó", "Usar os grupos de duas teclas pretas como referência."],
  ["Nomear as notas", "Dó, Ré, Mi, Fá, Sol, Lá, Si — localizar cada uma."],
  ["Postura e dedos", "Posição das mãos e numeração dos dedos."],
  ["A tua primeira melodia", "Tocar uma melodia didática original, passo a passo."],
  ["Apoio da mão esquerda", "Um exercício simples para acompanhar a melodia."],
];

const included = [
  "Guia digital em PDF",
  "Seis etapas ilustradas",
  "Exercícios simples",
  "Uma melodia didática original",
  "Um exercício de apoio com a mão esquerda",
  "Plano sugerido de prática em sete sessões",
];
const notIncluded = ["Vídeo ou áudio", "Aulas", "Acompanhamento individual", "Comunidade", "Certificado"];

const faqs = [
  ["Preciso de ter piano ou teclado?", "Sim. O guia é pensado para quem já tem acesso a um piano ou teclado para praticar."],
  ["Preciso de saber música?", "Não. O guia começa do zero, a partir do reconhecimento das notas."],
  ["Vou aprender a tocar rapidamente?", "O guia não promete domínio rápido nem resultados garantidos. O progresso depende da tua prática regular."],
  ["Em que formato recebo?", "É um ficheiro PDF que podes ler no telemóvel, tablet ou computador."],
  ["Inclui vídeos ou aulas?", "Não. Não inclui vídeo, áudio, aulas, acompanhamento individual, comunidade nem certificado."],
  ["Já posso comprar?", "O checkout está em pré-visualização. Os pagamentos dependem da aprovação do produto, que pode ainda estar em revisão."],
];

function Section({ id, title, children, alt }: { id?: string; title: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={alt ? "bg-secondary" : ""}>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold text-primary sm:text-4xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <span className="font-display text-lg font-bold text-primary">Piano do Zero</span>
        <a href="#oferta" className="inline-flex min-h-11 items-center rounded-full border border-primary px-4 text-sm font-bold text-primary">
          Ver oferta
        </a>
      </header>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-16 pt-6 sm:px-6 md:grid-cols-2 md:pt-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-coral">Guia digital em PDF</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-primary sm:text-5xl">
            Piano do Zero — A Tua Primeira Melodia
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Um guia introdutório para quem tem acesso a um piano ou teclado e quer reconhecer as notas e organizar a
            prática, com calma e passo a passo.
          </p>
          <div className="mt-6">
            <Cta />
            <PreviewNotice />
          </div>
        </div>
        <Keyboard className="w-full max-w-md justify-self-center drop-shadow-lg" />
      </section>

      <Section title="Começar parece difícil?" alt>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Tantas teclas iguais que não sabes onde fica cada nota.",
            "Não sabes por onde começar nem o que praticar cada dia.",
            "Os conteúdos soltos que encontras não seguem uma ordem clara.",
          ].map((t) => (
            <div key={t} className="rounded-2xl bg-card p-5 shadow-sm">
              <p>{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg">
          Este guia organiza os primeiros passos numa sequência simples, para saberes o que fazer em cada sessão.
        </p>
      </Section>

      <Section title="As seis etapas do guia">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Amostra do guia" alt>
        <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-6 text-center">
          <Keyboard className="w-40 opacity-60" />
          <p className="mt-4 font-bold">Amostra em preparação</p>
          <p className="text-sm text-muted-foreground">Este espaço está reservado para uma página real do guia.</p>
        </div>
      </Section>

      <Section title="O que está e não está incluído">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary">Incluído</h3>
            <ul className="mt-4 space-y-3">
              {included.map((x) => (
                <li key={x} className="flex gap-3"><span className="font-bold text-primary">✓</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-muted p-6">
            <h3 className="text-xl font-bold">Não incluído</h3>
            <ul className="mt-4 space-y-3">
              {notIncluded.map((x) => (
                <li key={x} className="flex gap-3 text-muted-foreground"><span className="font-bold text-coral">✕</span>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          O guia não promete domínio rápido nem resultado garantido. O progresso depende da tua prática.
        </p>
      </Section>

      <section id="oferta" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-4xl">A tua primeira melodia começa aqui</h2>
          <p className="mt-2 opacity-90">Guia digital em PDF · pagamento único</p>
          <p className="mt-6 font-display text-5xl font-bold">2.500 Kz</p>
          <div className="mt-6"><Cta>Comprar o guia</Cta></div>
          <div className="text-left text-foreground"><PreviewNotice /></div>
        </div>
      </section>

      <Section title="Perguntas frequentes">
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-border bg-card p-5">
              <summary className="cursor-pointer list-none font-bold">{q}</summary>
              <p className="mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <p className="font-display font-bold text-primary">Piano do Zero — A Tua Primeira Melodia</p>
          <p className="mt-2">Produto digital em PDF. Checkout em pré-visualização; pagamentos sujeitos à aprovação do produto.</p>
          <p className="mt-2">© {new Date().getFullYear()} Piano do Zero</p>
        </div>
      </footer>
    </main>
  );
}
