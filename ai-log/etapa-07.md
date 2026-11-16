# Stage 7 - AI Log

Tool: OpenAI Codex.

## Context and request
Implement Stage 7 from TW_Etapa7_Ghid.pdf using the existing AutoTrack.zip.
The existing React/Vite app uses interventii with titlu, tip and efectuata.

## Assistance received
- Added InterventieForm with controlled text/select fields and inline validation.
- Extended api.js with a shared request helper and POST/PATCH/DELETE.
- Integrated server-confirmed updates and pending-operation protection in App.
- Added tw.json and the required data-testid attributes.
- Preserved existing icons, theme switching and data; added responsive form styling.
- Updated running instructions and prepared a manual test/checklist guide.

## Implementation decisions
- A title must be non-empty after trim and at most 100 characters.
- Length is checked in JavaScript so pasting 101 characters demonstrates the error.
- Type is restricted to mecanica, electronica and estetica.
- No client-generated id; POST and PATCH responses update the React state.
- Failed requests do not clear the input or remove/change a card.
- Frontend validation helps the user; json-server is a mock API, not server-side validation.

## Verification and publication
Build and ESLint passed in the prepared copy using dependencies from the original archive.
See the delivered guide for browser-test results and steps to repeat on your machine.
Git commits/push have not been executed by the assistant. Record the real commit SHA
and complete the separate Stage 7 checklist after publication.
