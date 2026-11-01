# Passagem de contexto — Piano do Zero

Este ficheiro prepara a continuidade do projeto noutra conta Lovable/ChatGPT. É o guia de referência para retomar o trabalho sem depender do histórico desta conversa.

## Projeto e estado atual

- Produto/site: **Piano do Zero — A Tua Primeira Melodia**, em português de Angola.
- Repositório de código: [eugenioartes57-commits/piano-do-zero](https://github.com/eugenioartes57-commits/piano-do-zero).
- Branch de trabalho: `main`.
- Último commit de código da página: `37804913a19eea927dc530b4ee76cbcf68746fd0` — “Adapta estrutura visual do HTML de referência”. Os commits seguintes acrescentaram documentação de passagem.
- Projeto Lovable atual: [abrir editor](https://lovable.dev/projects/9228af18-cd48-4a5e-908e-9ba7f494b55e).
- Estado consultado em 1 de novembro de 2026: projeto Lovable pronto e **não publicado**; último commit registado no projeto: `35ffddd4fe237a40ec73abd9b1d4f2d2519e1f09` (atualização documental).
- Pré-visualização estática: [abrir preview](https://id-preview--9228af18-cd48-4a5e-908e-9ba7f494b55e.lovable.app/). Ela pode estar desatualizada; confirmar a sincronização/importação antes de avaliar mudanças recentes.
- O repositório GitHub foi confirmado como **público**. Qualquer pessoa pode ver e copiar o código, os ficheiros e o histórico de commits. A alteração também desativou as regras de push, conforme o aviso do GitHub.
- Não há neste guia credenciais, tokens ou chaves privadas.

O repositório não contém os ficheiros `HISTORICO-DO-PROJETO.md` nem `ESTADO-E-PROXIMOS-PASSOS.md`. Este documento reúne o contexto operacional essencial e o estado confirmado.

## Conteúdo verdadeiro do produto

O produto é um guia introdutório digital em PDF por **2.500 Kz**. Ajuda iniciantes com piano ou teclado a reconhecer notas e organizar a prática. O material apresenta:

1. Reconhecer o padrão do teclado.
2. Encontrar a nota Dó usando os grupos de duas teclas pretas.
3. Identificar as sete notas.
4. Noções de postura e dedos.
5. Uma melodia didática original.
6. Um exercício de apoio com a mão esquerda.

Também propõe um plano de prática em sete sessões. As seis etapas são conteúdo do guia; as sete sessões são uma sugestão de organização da prática, não sete aulas.

Não afirmar que o produto inclui vídeo, áudio, aulas, acompanhamento individual, comunidade ou certificado. Não prometer domínio rápido ou resultados garantidos. Não criar depoimentos, avaliações, estrelas, clientes fictícios, escassez ou contadores. O espaço de amostra deve permanecer reservado até existir uma amostra real autorizada.

O checkout conhecido é apenas uma pré-visualização: https://standerpay.com/checkout/825b3f44-2ede-4002-8d0c-b2fe672687de?preview=1. O produto estava em revisão no contexto mais recente fornecido pelo utilizador; verificar a aprovação atual antes de apresentar o checkout como funcional. O site Lovable permanece não publicado; não publicar sem instrução explícita.

## Código e referência visual

As alterações recentes estão sobretudo em:

- `src/routes/index.tsx` — estrutura e apresentação da página.
- `src/lib/piano-product.ts` — factos e texto do produto.

O HTML `piano_do_zero_landing_page.html` enviado pelo utilizador serviu **apenas como referência visual** para a organização da primeira dobra. O ficheiro tinha caracteres corrompidos e afirmações/elementos que não devem ser reutilizados como factos (incluindo informação de checkout e promessas não confirmadas). A fonte de verdade do produto é este documento e o README.

A página deve continuar mobile-first e responsiva, de 320 px a desktop, sem overflow horizontal, com botões confortáveis ao toque e texto legível. Preservar o estilo acolhedor e profissional em creme, verde-petróleo e coral.

## Como retomar noutra conta Lovable

O repositório público pode ser consultado e descarregado por qualquer conta. Há dois caminhos, com resultados diferentes:

### Para usar os créditos da nova conta

1. Entre na nova conta Lovable e confirme o workspace/créditos disponíveis.
2. Obtenha o código mais recente da branch `main` deste repositório público: [abrir o repositório](https://github.com/eugenioartes57-commits/piano-do-zero). Não é preciso autorização especial do GitHub para ler ou descarregar o código público.
3. No painel do Lovable, escolha **Import project to Lovable** e envie o ZIP do código. Confirme as condições e qualquer aviso de créditos que o próprio ecrã mostrar antes de concluir.
4. Isto cria um **novo projeto** com base no código. Não transfere esta conversa, mensagens do agente nem o histórico do projeto antigo.
5. Abra a pré-visualização do projeto novo, confira as páginas em telemóvel e computador e só depois decida os próximos ajustes.

Não incluir no ZIP `.env`, segredos, `node_modules` ou ficheiros de build. Não há uma base de dados/contas de utilizadores deste site a migrar segundo o estado conhecido.

### Para manter o projeto Lovable atual

Pode-se convidar a nova conta como colaboradora ou transferir a propriedade, se o plano permitir. A colaboração usa os créditos do workspace proprietário; portanto, adicionar uma pessoa não transfere o consumo para os créditos pessoais dela. A documentação da Lovable indica que a transferência para uma conta externa requer plano Business ou Enterprise. Confirmar regras e elegibilidade no ecrã da conta antes de mudar a propriedade.

A integração GitHub do Lovable não liga um projeto já existente a um repositório existente como uma simples troca de ligação: a documentação informa que a ligação cria um repositório. Para começar na conta nova com os créditos dela, a importação do ZIP é o caminho indicado. Se quiser manter sincronização Git depois da importação, configurar a ligação oferecida pelo novo projeto e verificar cuidadosamente qual repositório será criado/conectado antes de aceitar.

### Documentação oficial

- [Importar um projeto para o Lovable](https://docs.lovable.dev/features/projects/import-project)
- [FAQ: GitHub e projetos existentes](https://docs.lovable.dev/introduction/faq)
- [Colaboração e créditos](https://docs.lovable.dev/features/collaboration)
- [Definições e transferência de propriedade](https://docs.lovable.dev/features/projects/settings)

## Prompt pronto para iniciar no novo Lovable

> Continua o site Piano do Zero a partir do repositório público https://github.com/eugenioartes57-commits/piano-do-zero. Importa o código mais recente da branch main para esta conta Lovable. Depois lê o README.md e CONTEXTO-PARA-NOVA-CONTA.md completos. Primeiro lê o README.md e CONTEXTO-PARA-NOVA-CONTA.md completos. Mantém o idioma português de Angola, a apresentação responsiva mobile-first e a identidade visual creme, verde-petróleo e coral. Usa apenas os factos do produto descritos nesses documentos. Não inventes depoimentos, avaliações, estrelas, amostras, benefícios, funcionalidades, escassez ou resultados. Antes de editar, apresenta um resumo curto do estado do código importado e qualquer problema que impeça a pré-visualização. Depois faz apenas as alterações que eu pedir. Não publiques o site e não alteres o checkout sem confirmação da aprovação atual do produto.

## Próxima sequência recomendada

1. Abrir o repositório e confirmar que o ZIP/código é da branch `main` e do commit mais recente.
2. Importar para o workspace da nova conta, se o objetivo for usar os créditos dela.
3. Verificar preview em 320 px, telemóvel comum e desktop; corrigir problemas observados.
4. Só depois de confirmação do utilizador rever checkout, aprovação do produto e eventual publicação.
