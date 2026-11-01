import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CalendarX2, Check, CircleCheck, CircleX, FileText, Grid2X2, History, Info, Music2, Shuffle, TriangleAlert, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { faqs, included, notIncluded, product, steps } from "@/lib/piano-product";
import pianoPhoto from "@/assets/piano-practice.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Piano do Zero — A Tua Primeira Melodia | Guia em PDF" },
    { name: "description", content: "Guia ilustrado em PDF para iniciantes no piano e teclado: seis etapas, exercícios e uma melodia didática original. 2.500 Kz." },
    { property: "og:title", content: "Piano do Zero — A Tua Primeira Melodia" },
    { property: "og:description", content: "Reconhece as notas e organiza os primeiros momentos de prática com um guia ilustrado em PDF, seis etapas e uma proposta de prática em sete sessões." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const price = `${product.priceKz.toLocaleString("pt-AO")} Kz`;
const notice = "O checkout está em pré-visualização. A compra ficará disponível depois da aprovação do produto.";

function Heading({ title, eyebrow, subtitle }: { title: string; eyebrow?: string; subtitle?: string }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
    {eyebrow && <p className="mb-2 text-xs font-semibold uppercase text-accent-foreground">{eyebrow}</p>}
    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>}
    {eyebrow && <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />}
  </div>;
}

function Keyboard() {
  return <svg viewBox="0 0 320 140" className="w-48 max-w-full" role="img" aria-label="Ilustração de teclado de piano">
    <rect width="320" height="140" rx="8" className="fill-primary" />
    {Array.from({ length: 8 }, (_, i) => <rect key={i} x={12 + i * 37} y="14" width="34" height="112" rx="3" className="fill-card" />)}
    {[0, 1, 3, 4, 5].map(i => <rect key={i} x={36 + i * 37} y="14" width="22" height="68" rx="2" className="fill-foreground" />)}
  </svg>;
}

export function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  return <main>
    <div className="flex items-center justify-center gap-2 border-b border-notice-border bg-notice px-4 py-2.5 text-center text-xs font-medium leading-relaxed text-notice-foreground sm:text-sm">
      <TriangleAlert className="size-4 shrink-0" aria-hidden="true" /><span><strong>Atenção:</strong> {notice}</span>
    </div>

    <header className="bg-stage px-4 pb-14 pt-10 text-stage-foreground sm:px-6 sm:pb-16 sm:pt-12">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1.5 text-xs font-semibold uppercase text-primary"><FileText className="size-3.5" />Guia digital em PDF</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Piano do Zero — <span className="font-normal italic text-primary">A Tua Primeira Melodia</span></h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-relaxed text-stage-muted sm:text-xl">Reconhece as notas, entende o padrão do teclado e organiza os primeiros momentos de prática com um guia ilustrado pensado para iniciantes.</p>
        <figure className="piano-photo relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-lg">
          <img src={pianoPhoto} alt="Imagem ilustrativa de mãos a praticar num piano acústico" width={1536} height={1024} fetchPriority="high" className="h-60 w-full object-cover sm:h-80 lg:h-[360px]" />
          <figcaption className="photo-caption absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 pb-5 pt-14 text-left text-xs text-stage-foreground"><span className="flex items-center gap-2"><Music2 className="size-4 text-primary" />Aprende no teu próprio ritmo</span><span className="hidden sm:block">Ideal para teclado ou piano</span></figcaption>
        </figure>
        <div className="mx-auto mt-8 max-w-md">
          <p className="mb-5 flex flex-wrap items-baseline justify-center gap-2"><span className="text-3xl font-extrabold sm:text-4xl">{price}</span><span className="text-sm text-stage-muted">/ pagamento único</span></p>
          <Button asChild className="h-auto min-h-14 w-full whitespace-normal px-5 py-4 text-base font-semibold"><a href="#comprar">Ver a oferta — {price}<ArrowRight /></a></Button>
          <p className="mt-4 text-xs text-stage-muted">Compra disponível após a aprovação do produto</p>
        </div>
      </div>
    </header>

    <section className="border-y border-border bg-secondary py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-accent-foreground"><Music2 className="size-4" />Primeiros passos, com uma sequência clara</p>
          <h2 className="mb-7 text-3xl font-bold sm:text-4xl">Saber por onde começar faz diferença.</h2>
          <div className="space-y-4">
            {[
              [Grid2X2, "Localiza as notas no teclado sem tentar decorar tudo de uma vez."],
              [CalendarX2, "Segue uma sequência de prática em vez de juntar dicas soltas."],
              [Shuffle, "Liga o reconhecimento das notas aos primeiros exercícios e a uma melodia didática."],
            ].map(([Icon, text]) => { const Symbol = Icon as typeof Grid2X2; return <div key={String(text)} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"><span className="rounded-lg bg-notice p-3 text-accent-foreground"><Symbol className="size-5" /></span><p className="pt-1 text-sm font-medium leading-relaxed sm:text-base">{String(text)}</p></div>; })}
          </div>
        </div>
        <figure className="relative overflow-hidden rounded-lg lg:col-span-5">
          <img src={pianoPhoto} width={1536} height={1024} loading="lazy" alt="Pormenor ilustrativo da prática ao piano" className="h-80 w-full object-cover sm:h-[360px]" />
          <figcaption className="photo-caption absolute inset-x-0 bottom-0 px-6 pb-6 pt-20 text-center font-display text-sm italic leading-relaxed text-stage-foreground">Seis etapas ilustradas organizam os primeiros conceitos e exercícios do guia.</figcaption>
        </figure>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl"><Heading title="Do teclado à tua primeira melodia" eyebrow="O conteúdo do guia" subtitle="Reconhece as notas e percorre seis etapas ilustradas, com exercícios e uma proposta de prática." />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{steps.map(([title, description], i) => <li key={title} className="relative rounded-lg border border-border bg-muted/40 p-6">
          <span aria-hidden="true" className="absolute right-4 top-3 font-display text-4xl font-bold text-border">0{i + 1}</span>
          <span className="mb-4 flex size-10 items-center justify-center rounded-md bg-stage font-bold text-stage-foreground">{i + 1}</span>
          <h3 className="font-sans text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </li>)}</ol>
      </div>
    </section>

    <section className="bg-stage-soft px-4 py-16 text-stage-foreground sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl text-center"><h2 className="text-3xl font-bold sm:text-4xl">Conhece o formato do guia</h2>
        <p className="mt-3 text-sm text-stage-muted">A pré-visualização de uma página real do PDF ainda está a ser preparada.</p>
        <div className="mx-auto mt-10 flex min-h-72 max-w-2xl flex-col items-center justify-center gap-5 rounded-lg border border-stage-muted/30 bg-stage px-6 py-10 sm:min-h-80">
          <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary">Prévia indisponível</span>
          <Keyboard /><FileText className="size-7 text-primary" aria-hidden="true" />
          <p className="font-display text-xl">Amostra real do PDF ainda não disponível</p>
        </div>
      </div>
    </section>

    <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl"><Heading title="O que inclui o guia" subtitle="Consulta o conteúdo da oferta antes de decidir." />
        <div className="grid gap-8 md:grid-cols-2">
          {[{ title: "Incluído", items: included, positive: true }, { title: "Não incluído", items: notIncluded, positive: false }].map(({ title, items, positive }) => <div key={title} className={`rounded-lg border-2 bg-card p-6 sm:p-8 ${positive ? "border-success/20" : "border-destructive/15"}`}>
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4"><span className={`flex size-10 items-center justify-center rounded-full ${positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{positive ? <Check className="size-5" /> : <X className="size-5" />}</span><h3 className="font-sans text-xl font-bold">{title}</h3></div>
            <ul className="space-y-4">{items.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">{positive ? <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" /> : <CircleX className="mt-0.5 size-4 shrink-0 text-destructive" />}<span className={positive ? "" : "text-muted-foreground"}>{item}</span></li>)}</ul>
          </div>)}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-notice-border bg-notice p-4 text-center text-xs leading-relaxed text-notice-foreground sm:text-sm"><Info className="mr-1 inline size-4" />O plano é uma sugestão de prática. O ritmo de aprendizagem varia de pessoa para pessoa; o guia não promete um prazo nem um resultado específico.</p>
      </div>
    </section>

    <section id="comprar" className="scroll-mt-4 bg-stage px-4 py-16 text-center text-stage-foreground sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Um guia claro para os teus primeiros passos</h2><p className="mt-4 text-stage-muted">Guia digital em PDF · pagamento único · 2.500 Kz</p>
        <p className="mb-6 mt-9 text-4xl font-extrabold text-primary sm:text-5xl">{price}</p>
        <Button onClick={() => setModalOpen(true)} className="h-auto min-h-14 w-full whitespace-normal px-10 py-4 text-lg font-bold sm:w-auto">Ver disponibilidade</Button>
        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 border-t border-stage-muted/20 pt-6 text-xs leading-relaxed text-primary/90"><Info className="mt-0.5 size-4 shrink-0" /><span><strong>Atenção:</strong> {notice}</span></p>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-6 sm:py-24"><div className="mx-auto max-w-3xl"><Heading title="Perguntas frequentes" subtitle="Respostas sobre o conteúdo, o formato e a disponibilidade de compra." />
      <Accordion type="single" collapsible className="space-y-4">{faqs.map(([question, answer], i) => <AccordionItem key={question} value={`faq-${i}`} className="overflow-hidden rounded-lg border border-border"><AccordionTrigger className="gap-4 px-5 py-5 text-sm font-semibold hover:bg-muted/50 hover:no-underline sm:text-base">{question}</AccordionTrigger><AccordionContent className="bg-muted/30 px-5 pb-5 pt-3 leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </div></section>

    <footer className="border-t border-stage-muted/20 bg-stage px-4 py-12 text-center text-xs text-stage-muted sm:px-6 sm:text-sm"><div className="mx-auto max-w-5xl"><p className="font-display text-lg font-semibold text-stage-foreground">Piano do Zero — A Tua Primeira Melodia</p><p className="mx-auto mt-4 max-w-xl leading-relaxed">Guia digital em PDF · 2.500 Kz · compra disponível após a aprovação do produto.</p><p className="mt-6 border-t border-stage-muted/10 pt-6">© 2026 Piano do Zero. Todos os direitos reservados.</p></div></footer>

    <Dialog open={modalOpen} onOpenChange={setModalOpen}><DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-lg bg-card p-6 text-center">
      <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-notice text-accent-foreground"><History className="size-6" /></span>
      <DialogTitle className="font-sans text-xl leading-tight">Compra ainda indisponível</DialogTitle>
      <DialogDescription className="leading-relaxed">O checkout está em pré-visualização. Poderás concluir a compra depois da aprovação do produto.</DialogDescription>
      <DialogClose asChild><Button className="h-12 w-full bg-stage font-semibold text-stage-foreground hover:bg-stage-soft">Entendido</Button></DialogClose>
    </DialogContent></Dialog>
  </main>;
}
