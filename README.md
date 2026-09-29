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
- [ ] Stage 2: data logic in JavaScript