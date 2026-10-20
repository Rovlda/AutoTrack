# Stage 4: AI log

## Tools
- Gemini

## Conversations
(Splitting the React app into data-driven components)

## Key requests
### 1. Generating List and Card components
- Asked: Help me create the `InterventieList` and `InterventieCard` components based on Stage 4 guidelines.
- Got: Complete `.jsx` files using React props, `.map()`, and conditional rendering for the empty list state, while avoiding React `key` warnings.
- Changed or rejected: Utilized the code as provided to ensure the CSS classes match those established in Stage 1.

## What I learned / what did not work
I learned how to break down a UI into smaller, reusable React components (`InterventieCard`), how to pass data downwards through `props`, and why the `key` attribute is essential when mapping over arrays to help React identify items.