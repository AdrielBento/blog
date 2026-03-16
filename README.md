## Comentários (Giscus)

- A página de post suporta comentários via GitHub Discussions com Giscus.
- O widget segue o tema do site (`light`/`dark`) em runtime.
- Configuração por variáveis públicas:
- `VITE_GISCUS_REPO`
- `VITE_GISCUS_REPO_ID`
- `VITE_GISCUS_CATEGORY`
- `VITE_GISCUS_CATEGORY_ID`
- `VITE_GISCUS_MAPPING` (`pathname` por padrão)
- `VITE_GISCUS_LANG` (`pt-BR` por padrão)
- Sem essas variáveis, o bloco de comentários fica oculto em produção.
- Política de moderação atual: login GitHub obrigatório (sem comentário anônimo).

### Como obter `VITE_GISCUS_*`

1. Acesse `https://giscus.app/pt-br`.
2. Instale o app **giscus** no repositório GitHub do blog.
3. Ative **Discussions** no repositório (`Settings -> Features -> Discussions`).
4. No `giscus.app`, preencha repositório, categoria e mapeamento.
5. Copie os atributos do snippet gerado e mapeie para as envs:
- `data-repo` -> `VITE_GISCUS_REPO`
- `data-repo-id` -> `VITE_GISCUS_REPO_ID`
- `data-category` -> `VITE_GISCUS_CATEGORY`
- `data-category-id` -> `VITE_GISCUS_CATEGORY_ID`
- `data-mapping` -> `VITE_GISCUS_MAPPING`
- `data-lang` -> `VITE_GISCUS_LANG`

Use [`.env.example`](/home/adriel/documents/code-craft/.env.example) como referência para criar seu `.env`/`.env.local`.
