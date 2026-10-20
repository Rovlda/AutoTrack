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
Tools: ChatGPT, Gemini
Used for: Generating CSS Grid layout, brainstorming the data model, formatting semantic HTML.
Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite si React project
- [x] Stage 4: components rendered from data

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
```bash
cd frontend
npm install
npm run dev




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