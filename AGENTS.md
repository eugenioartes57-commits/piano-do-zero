<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the sales page in the TanStack index route using shared Button, Accordion and Dialog components; this preserves routing and accessible interactions rather than serving standalone HTML.
- Keep product rules and section data in src/lib/piano-product.ts with focused tests; this gives price and stage-count constraints a single source of truth.
- Express the reference's palette and image overlays through semantic global CSS tokens; this keeps presentation consistently themed.
