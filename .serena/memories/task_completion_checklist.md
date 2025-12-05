# Task completion checklist
- Ensure TypeScript builds cleanly (no tsc errors).
- Run `npm run lint`, `npm run test`, `npm run test:accessibility`, and `npm run test:seo` inside website/.
- For substantial changes, run `npm run build` and `npm run analyze:bundle`; verify `/out` output if relevant.
- Optimize any new images and confirm Cloudflare static export compatibility.
- Update docs (e.g., website/docs) for new patterns or scripts and mention verification steps in PR notes.