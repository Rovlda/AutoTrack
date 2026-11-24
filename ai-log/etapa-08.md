# Stage 8 - AI Log

Tool: OpenAI Codex.
Date: 24 November 2026.

## Context
Implement Stage 8 from TW_Etapa8_Ghid.pdf in the existing AutoTrack project,
preserving the Stage 7 form, validation and persistent CRUD operations.

## Assistance received
- Configured BrowserRouter and the list, detail, about and 404 routes.
- Extracted Layout with NavLink navigation, Outlet, theme switch and footer.
- Moved the existing list state and operations into InterventiiPage.
- Added useParams and a single-item API request with cancellation and stale-response protection.
- Moved component styles into adjacent CSS Modules and shared styles into index.css.
- Centralized intervention types and preserved the required test markers.
- Added optional system and description demo metadata inferred from existing titles.
- Updated the README and Stage 8 checklist.

## Verification
- Clean dependency installation with npm ci passed.
- Production build and ESLint passed.
- 31 browser checks passed against the compiled app with an isolated test database.
- Verified navigation, detail refresh, missing items, unknown routes and API errors.
- Verified form validation, pending state and persistence of add, toggle and delete.
- Inspected desktop, dark-theme and mobile layouts.

## Publication
Stage 8 has not yet been committed or pushed. The final checklist permalinks
must use the real implementation commit SHA after publication.
