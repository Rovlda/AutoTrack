# AutoTrack
A web application for tracking car maintenance, repairs, and modifications.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| Intervention Title | text | required, max 100 chars |
| Status (done) | boolean | toggled from the list, default false |
| Type | fixed values | Mechanics, Electronics, Aesthetics |
| System | relation | Engine, Transmission, Interior, Exterior |
| Owner | relation | the user who owns the car (from week 11) |

Sample data used across all stages:
1. Segmentare bloc motor și reparație chiuloasă, done, Mechanics
2. Instalare cameră marșarier, active, Electronics
3. Schimb ulei cutie DSG, active, Mechanics

## AI usage
Tools: ChatGPT, Gemini, OpenAI Codex
Used for: Generating CSS Grid layout, brainstorming the data model, formatting semantic HTML.
Details per stage: see the `ai-log/` folder.

## How to run
Aplicația React se rulează din `frontend/`. Instalează Node.js compatibil
cu Vite 8 (minimum 22.12 pe ramura Node 22), apoi:

```sh
cd frontend
npm ci
npm run api
```

În al doilea terminal, tot din `frontend/`: `npm run dev`.
Deschide adresa afișată de Vite. Verificări: `npm run build` și `npm run lint`.
Versiunea HTML istorică se află în `mockup/`.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite si React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page 
- [ ] Stage 9: own backend with Express

## Checklist Etapa 1

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Rovlda/AutoTrack/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/Rovlda/AutoTrack/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/Rovlda/AutoTrack/tree/main/ai-log) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L..-L..](https://github.com/Rovlda/AutoTrack/blob/9b86b8514d5dbeb10cb2575e65fa62226a93c9dd/index.html#L10-L62) | open the page |
| S1-R5 | finished card looks different | [style.css#L..](https://github.com/Rovlda/AutoTrack/blob/9b86b8514d5dbeb10cb2575e65fa62226a93c9dd/style.css#L100-L124) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L..](https://github.com/Rovlda/AutoTrack/blob/9b86b8514d5dbeb10cb2575e65fa62226a93c9dd/style.css#L142-L148) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L..](https://github.com/Rovlda/AutoTrack/blob/9b86b8514d5dbeb10cb2575e65fa62226a93c9dd/style.css#L17-L28) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [link-catre-commit-ul-tau](https://github.com/Rovlda/AutoTrack/commit/fdbc15befabdfe96df375cb14aba1be6ca8c09b7) | commit history |






## Checklist Etapa 2

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JS file linked, logs on page load | [index.html#L..](https://github.com/Rovlda/AutoTrack/blob/4d9e4cd062ac8c23aa18db609f243ffaae774e96/index.html#L67) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [interventii.js#L2-L6](https://github.com/Rovlda/AutoTrack/blob/4d9e4cd062ac8c23aa18db609f243ffaae774e96/interventii.js#L2-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [interventii.js#L11-L47](https://github.com/Rovlda/AutoTrack/blob/4d9e4cd062ac8c23aa18db609f243ffaae774e96/interventii.js#L11-L56) | console output |
| S2-R4 | add rejects empty name and invalid tag | [interventii.js#L74-L75](https://github.com/Rovlda/AutoTrack/blob/4d9e4cd062ac8c23aa18db609f243ffaae774e96/interventii.js#L76-L77) | last 2 console lines |
| S2-R5 | original array unchanged after add | [interventii.js#L64](https://github.com/Rovlda/AutoTrack/blob/4d9e4cd062ac8c23aa18db609f243ffaae774e96/interventii.js#L66) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/Rovlda/AutoTrack/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/Rovlda/AutoTrack/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit URL](https://github.com/Rovlda/AutoTrack/commit/4d9e4cd062ac8c23aa18db609f243ffaae774e96) | commit history |



## Etapa 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
```sh
cd frontend
npm ci
npm run dev
```




## Checklist Etapa 4

| ID | Requirement | Where (https://github.com/Rovlda/AutoTrack/tree/main/frontend/src/components) | How to check |
|---|---|---|---|
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/Rovlda/AutoTrack/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [frontend/src/components/InterventieCard.jsx#L4-L16](https://github.com/Rovlda/AutoTrack/blob/9f322cc9644cfab13e78e7ecdcd5ece2fde50679/frontend/src/components/InterventieCard.jsx#L4-L16) | read |
| S4-R3 | map + key={id}, no console warnings | [frontend/src/components/InterventieList.jsx#L10-L15](https://github.com/Rovlda/AutoTrack/blob/9f322cc9644cfab13e78e7ecdcd5ece2fde50679/frontend/src/components/InterventieList.jsx#L10-L12) | F12, Console |
| S4-R4 | message for empty list | [frontend/src/components/InterventieList.jsx#L4-L7](https://github.com/Rovlda/AutoTrack/blob/9f322cc9644cfab13e78e7ecdcd5ece2fde50679/frontend/src/components/InterventieList.jsx#L4-L7) | set array to [] |
| S4-R5 | state changes the card look | [frontend/src/components/InterventieCard.jsx#L6](https://github.com/Rovlda/AutoTrack/blob/9f322cc9644cfab13e78e7ecdcd5ece2fde50679/frontend/src/components/InterventieCard.jsx#L6) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/Rovlda/AutoTrack/blob/main/README.md), [ai-log/etapa-04.md](https://github.com/Rovlda/AutoTrack/blob/main/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [Commit URL](https://github.com/Rovlda/AutoTrack/commit/9f322cc9644cfab13e78e7ecdcd5ece2fde50679) | commit history |




## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. At Stage 5, changes were lost on refresh. Stage 7 now persists add, toggle and delete through the API.

## Stage 5 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | list kept in useState, in App | [https://github.com/Rovlda/AutoTrack/blob/1de30081c49e03e84016f64d136d0e2e1d7811b7/frontend/src/App.jsx#L17] | read |
| S5-R2 | toggling changes state and card look | [https://github.com/Rovlda/AutoTrack/blob/1de30081c49e03e84016f64d136d0e2e1d7811b7/frontend/src/App.jsx#L21-L25] | click a checkbox |
| S5-R3 | delete removes the item | [https://github.com/Rovlda/AutoTrack/blob/1de30081c49e03e84016f64d136d0e2e1d7811b7/frontend/src/App.jsx#L28-L30] | click Delete |
| S5-R4 | header counter derived, not in state | [https://github.com/Rovlda/AutoTrack/blob/1de30081c49e03e84016f64d136d0e2e1d7811b7/frontend/src/App.jsx#L39] | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [https://github.com/Rovlda/AutoTrack/blob/1de30081c49e03e84016f64d136d0e2e1d7811b7/frontend/src/App.jsx#L23] | read |
| S5-R6 | light/dark toggle: state + data-theme on html | [https://github.com/Rovlda/AutoTrack/blob/1de30081c49e03e84016f64d136d0e2e1d7811b7/frontend/src/App.jsx#L33-L37] | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [https://github.com/Rovlda/AutoTrack/blob/main/README.md][https://github.com/Rovlda/AutoTrack/blob/main/ai-log/etapa-05.md] | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [https://github.com/Rovlda/AutoTrack/commit/fcb2d7b86f689a3c32432428b64a8014eff2c803] | commit history |




## Stage 6: data from a mock API
The list is served by json-server from db.json. The app fetches it on load and shows a loading state and an error state.
```bash
npm run api  # terminal 1, http://localhost:3001
npm run dev  # terminal 2, http://localhost:5173
```


## Stage 6 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S6-R1 | npm run api starts, route shows JSON | [package.json](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/frontend/package.json#L11) | open localhost:3001/interventii |
| S6-R2 | data no longer in React code | [App.jsx](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/frontend/src/App.jsx#L11) | read |
| S6-R3 | loading message while waiting | [App.jsx](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/frontend/src/App.jsx#L72) | run API with --delay 4000 |
| S6-R4 | error message when API is down | [App.jsx](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/frontend/src/App.jsx#L74-L76) | stop API, refresh |
| S6-R5 | fetch only in api.js, URL from env | [api.js](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/frontend/src/api.js#L5) | search for fetch |
| S6-R6 | README Stage 6 section + AI log | [README](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/README.md), [AI log](https://github.com/Rovlda/AutoTrack/blob/e596179e77491910c51a240b1c6fc5cdb0bbe038/ai-log/etapa-06.md) | read |
| S6-R7 | commit "Stage 6" pushed | [Stage 6 commit](https://github.com/Rovlda/AutoTrack/commit/e596179e77491910c51a240b1c6fc5cdb0bbe038) | commit history |

## Stage 7: form and validation

Interventions can be added directly from the page using a controlled form. The title is required, trimmed, and limited to 100 characters. The type must be mecanica, electronica, or estetica.

All changes are saved through the API: POST creates an intervention, PATCH updates its status, and DELETE removes it. The list updates only after the server confirms the operation, using the data returned by the server. Added interventions receive their IDs from the server.

The submit button is disabled while saving, preventing duplicate submissions. The form is cleared only after a successful save. If saving fails, an error is displayed next to the form and the entered values are preserved. Failed updates or deletions display an error while keeping the list visible and unchanged.

The layout displays the form and list in two columns on desktop and one column below 700px. The existing light/dark theme switch is preserved.

The repository includes tw.json at its root and the required data-testid attributes for automated verification.

Run the following commands from frontend/, in two separate terminals:

```bash
npm run api  # terminal 1, http://localhost:3001
npm run dev  # terminal 2, http://localhost:5173
```

To test the pending state, stop the API and restart it with a delay:

```bash
npm run api -- --delay 3000
```

Build and code checks:

```bash
npm run build
npm run lint
```

Manual checks:
- Submit an empty or whitespace-only title: an inline error appears and no POST request is sent.
- Submit a title longer than 100 characters: validation prevents submission.
- Add an intervention and refresh: the intervention remains in the list.
- Toggle an intervention and refresh: its status is preserved.
- Delete an intervention and refresh: it remains deleted.
- Stop the API after loading the page and submit: the error appears and the form values remain.
- With the API stopped, attempt to toggle or delete: an error appears and the item remains unchanged.
- Restart the API and retry: the operation succeeds.
- With a delayed response, verify that the submit button is disabled and the form clears only after success.

## Stage 7 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S7-R1 | controlled form: value + onChange on every field | [InterventieForm.jsx](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieForm.jsx#L57-L72) | inspect the title input and type select |
| S7-R2 | empty title shows an error, nothing is sent | [InterventieForm.jsx](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieForm.jsx#L18-L36) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | [App.jsx](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/App.jsx#L37-L40), [api.js](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/api.js#L17-L21) | add an intervention, refresh |
| S7-R4 | toggle and delete survive refresh | [App.jsx](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/App.jsx#L43-L71), [api.js](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/api.js#L23-L31) | toggle, refresh; delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | [Submit logic](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieForm.jsx#L38-L50), [Submit button](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieForm.jsx#L75-L77) | run API with --delay 3000; stop API and submit |
| S7-R6 | tw.json and required data-testid attributes | [tw.json](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/tw.json#L1-L8), [Form](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieForm.jsx#L54-L77), [Card](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieCard.jsx#L13-L42), [List](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/components/InterventieList.jsx#L4-L5), [App](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/frontend/src/App.jsx#L105-L110) | inspect tw.json; querySelectorAll in the console |
| S7-R7 | README Stage 7 section + AI log | [README](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/README.md#stage-7-form-and-validation), [AI log](https://github.com/Rovlda/AutoTrack/blob/9728cb5161fcdaec3577bed18d07263a94d9ec1d/ai-log/etapa-07.md) | read |
| S7-R8 | commit "Stage 7" pushed | [Stage 7 commit](https://github.com/Rovlda/AutoTrack/commit/9728cb5161fcdaec3577bed18d07263a94d9ec1d) | commit history |




## Stage 8: routing and detail page

React Router provides the intervention list at `/`, a detail page at
`/interventii/:id`, an about page at `/despre`, and a catch-all 404 page.
The detail route uses the resource name from `tw.json` exactly.

`BrowserRouter` wraps the app in `main.jsx`. `App.jsx` contains the route map;
`Layout` provides the shared header, `NavLink` navigation, `Outlet`, theme switch
and footer. Internal page navigation uses `Link`/`NavLink`, so it does not reload
the HTML document. The intervention counter now belongs to the list page.

`InterventieDetaliuPage` reads the id with `useParams` and calls
`fetchInterventie(id)` in `api.js`, requesting only `/interventii/<id>`.
The page displays loading, success, missing-item (HTTP 404), and connection-error
states. Requests are cancelled when the id changes or the page unmounts, and
responses are associated with their requested id so stale details are hidden.

The detail page also displays `sistem` and `descriere`. The five original entries
retain their ids, titles, types and statuses. Their new descriptions are demo
metadata inferred from their titles, not additional maintenance records. Items
created through the existing form can omit these fields; the detail page then
shows explicit fallback text.

Each UI component and page has an adjacent CSS Module. `index.css` contains
only theme variables, base styles and shared classes. `constants.js` centralizes
the intervention types and labels. The existing logo, icons, red theme, dark mode,
responsive layout and server-confirmed CRUD operations are preserved.

The Stage 7 test markers remain; `item-title` becomes `item-link` as required by
Stage 8. New markers: `nav`, `detail`, `detail-title`, `not-found`, and the detail
page's `loading`/`error` messages.

### Run and verify

From `frontend/`, use `npm ci` once, then `npm run api` and `npm run dev` in two
separate terminals. Run `npm run build` and `npm run lint` for code checks.
For the built app, use `npm run preview` while the API is running.

Test `/`, `/interventii/1`, `/interventii/999999`, `/despre` and `/ceva`.
Check browser Back/Forward, refresh on a detail route, and the Network tab:
navigation should produce API requests without new document requests.
Vite supports direct route refresh; production hosting will need an SPA fallback
to `index.html` (the later deployment stage).

Validation performed on 24 November 2026: clean dependency install, production
build, ESLint and 31 browser checks passed. Browser checks used the compiled app
and a separate test database. See [AI log](ai-log/etapa-08.md).

Reference: [React Router declarative routing](https://reactrouter.com/start/declarative/routing).

### Stage 8 Checklist

The source links below work in the repository. After publishing Stage 8,
replace them with permalinks to the implementation commit and publish the
checklist update separately. S8-R8 is pending publication.

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S8-R1 | Header navigation changes page without reload | [App](frontend/src/App.jsx), [Layout](frontend/src/components/Layout.jsx) | Click navigation links; no new document in Network |
| S8-R2 | Item title opens its detail page | [Card](frontend/src/components/InterventieCard.jsx), [Detail](frontend/src/pages/InterventieDetaliuPage.jsx) | Click a title; check matching id and title |
| S8-R3 | Detail refresh works; missing id shows error | [Detail](frontend/src/pages/InterventieDetaliuPage.jsx), [API](frontend/src/api.js) | Refresh /interventii/1; open /interventii/999999 |
| S8-R4 | Unknown URL shows application 404 | [App](frontend/src/App.jsx), [NotFound](frontend/src/pages/NotFoundPage.jsx) | Open /ceva |
| S8-R5 | Adjacent CSS Modules; only shared global styles | [Components](frontend/src/components), [Pages](frontend/src/pages), [Global CSS](frontend/src/index.css) | Inspect imports and generated classes |
| S8-R6 | Stage 7/8 test markers; resource-matching detail route | [tw.json](tw.json), [Layout](frontend/src/components/Layout.jsx), [Card](frontend/src/components/InterventieCard.jsx), [Detail](frontend/src/pages/InterventieDetaliuPage.jsx) | Inspect data-testid; open /interventii/1 |
| S8-R7 | README Stage 8 section and AI log | [README](README.md#stage-8-routing-and-detail-page), [AI log](ai-log/etapa-08.md) | Read |
| S8-R8 | Stage 8 implementation commit pushed | Pending publication; no commit URL exists yet | Publish implementation, then add real permalinks in a separate checklist commit |
