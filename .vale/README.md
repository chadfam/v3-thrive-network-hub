# UTT Vale rules

Real-time prose linting for the United to Thrive site. Rules enforce the locked decisions from `_context/CHAD_FEEDBACK_AND_DIRECTION.md` §3 + §15 directly in the editor.

## Setup (one-time, per machine)

```bash
brew install vale
```

Then install the **Vale** VS Code extension by **chrischinchilla**. The extension auto-reads `.vale.ini` in the repo root.

## What gets flagged

| Rule file | Level | Catches |
|---|---|---|
| `EmDash.yml` | error | `—` anywhere |
| `BannedPhrases.yml` | error | Unconditional bans: `personally worked with`, `Section 125`, `Waves of Pay`, tier names, `vetted bench`, etc. |
| `Substitutions.yml` | error | Phrases with required replacements: `Three Ways In` → `Three Ways to Win`, etc. |
| `AITemplateLabels.yml` | error | AI-template section labels: `What it is`, `Who it's for`, `What's included`, etc. |
| `AIIsms.yml` | warning | Soft warnings: `leverage`, `synergy`, `seamlessly`, etc. |

## Scope

Vale lints `.tsx`, `.jsx`, `.ts`, `.js`, `.md`, `.html`, `.css` files. Exclusions live in `.valeignore` — notably `_context/` is excluded because those docs intentionally quote banned phrases as examples.

## Updating the rules

When a new banned phrase or substitution is decided:

1. Add it to the relevant `.yml` file in this directory.
2. Mirror the change in `_context/CHAD_FEEDBACK_AND_DIRECTION.md` so the source of truth and the linter stay in sync.
3. Also mirror in `.claude/scripts/utt-audit.sh` if it should be a blocking commit-time check, not just an editor warning.

## Running Vale from the CLI

```bash
vale src/                         # lint everything under src/
vale src/components/command/      # lint one directory
vale src/components/command/CCBoard.tsx  # lint one file
```

## How this fits the rest of the project

- **Vale (this directory)**: real-time editor feedback as you type.
- **`.claude/scripts/utt-audit.sh`**: backstop that runs on every Claude Code Stop event and blocks completion if violations slipped through.
- **`_context/CHAD_FEEDBACK_AND_DIRECTION.md` §3 + §15**: the human-readable source of truth that the above two enforce.
