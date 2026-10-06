# Stage 2: AI log

## Tools
- Gemini

## Conversations
[Link conversație] (Implementing JS data logic and immutable array methods)

## Key requests
### 1. JavaScript logic setup
- Asked: Help me write the Stage 2 JS logic, correctly applying map, filter, and reduce for the AutoTrack theme.
- Got: Complete `interventii.js` file featuring immutable functions for adding, deleting, toggling, and validating interventions, alongside structured console tests.
- Changed or rejected: Kept the logic exactly as suggested, ensuring `nextId` correctly calculates IDs using `reduce` to prevent duplication.

## What I learned / what did not work
I learned the critical difference between modifying an array in place (like using `.push()`) and returning a new array using the spread operator `[...lista, nou]`. This immutability is essential for how React will track state changes in future stages.