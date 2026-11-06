# rebuildup/tool-pi-game

Standalone pi-game tool. See my-web-2025 spec for embed instructions.

## Standalone build (static site)

The repository ships a Vite based standalone build so that the host can serve
the tool as a static SPA under `/tools/pi-game/app/` and embed it in a sandbox
iframe.

```sh
pnpm install --frozen-lockfile
pnpm run build        # -> dist/
pnpm run preview      # local preview of dist/
pnpm run type-check   # tsc --noEmit
```

- `dist/index.html` references its assets **relatively** (`./assets/...`), so the
  artifact keeps working under a sub-path.
- The build fetches nothing from an external origin.
