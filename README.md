React refresh plan

Rule 0: Professional standard over tutorial comfort

- Study each topic as if I need to explain and defend it in a real codebase.
- Prefer production tradeoffs, failure modes, and maintainability over demo-friendly patterns.
- For every concept, be able to answer: when to use it, when not to use it, common mistakes, and what simpler option might be better.
- Avoid cargo-cult React patterns, unnecessary abstractions, and premature optimization.
- Optimize for believable team-level judgment, not memorized API trivia.

Goal

- Refresh React to a believable mid-level interview standard.
- I am already a senior frontend developer.
- The goal is to bridge the gap from vanilla JS and AlpineJS into React.
- Focus on concepts I may be asked to explain, not deep framework internals.
- Prioritize hooks, state ownership, async UI, and common mistakes.
- Desktop only. Responsive design is out of scope for this refresher.
- CSS is not a focus area here. Basic Tailwind-level styling is enough.
- Keep styling minimal unless I explicitly need a small example for clarity.

Project format

- Use a simple top nav.
- Each route should cover one major React concern, not one tiny lesson.
- Every page should include small code snippets or runnable examples that I can open and inspect quickly.
- Each page should also include brief notes on decisions, tradeoffs, and common mistakes.

Tutor format

- Give guidance in short steps, not long explanations.
- Prefer file-first instructions such as: create folder, create file, export component, import component, render component.
- Use professional naming and structure, for example `src/elements/HomePageChecklist.jsx`.
- Start small: first render static markup, then add state, then add persistence, then refactor if needed.
- Do not dump code unless I explicitly ask for it.
- Keep each step focused on one change only so I can build it myself.

Plan structure

Rendering

- component shape and readability
- props vs hardcoded values
- composition vs inheritance
- children pattern
- what causes a re-render
- why stable keys matter
- conditional rendering patterns
- derived UI from state and props

State and Forms

- local state updates
- functional state updates
- controlled vs uncontrolled inputs
- form event handling

Effects

- when effect is needed vs not needed
- dependency array basics
- cleanup functions
- stale closures
- async work inside effects
- common effect mistakes

Refs

- refs for DOM access
- refs for values that should not re-render
- tracking previous values
- difference between ref and state

State Ownership

- who should own state
- lifting state when multiple children need it
- avoid duplicated state
- when prop drilling is fine

Performance

- useMemo, useCallback, memo
- when they help
- when they are noise
- preventing unnecessary re-renders
- unnecessary state
- duplicated state
- effect overuse
- unstable props and handlers
- premature optimization

Context and Custom Hooks

- what context is good for
- when context is overkill
- context vs local state
- provider placement and re-render impact
- extracting reusable logic
- hook naming and API shape
- keeping hooks focused
- shared logic without shared UI

Async UI

- loading, error, empty, success states
- fetch on mount
- race conditions and cancellation
- retries and fallback UI
- where fetched data should live

Routing

- route structure
- nested routes
- params and query strings
- guarded routes at a basic level

Testing

- what to test in components
- user behavior over implementation details
- testing loading and error states
- testing forms and interactions
