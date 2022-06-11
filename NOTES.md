It took me a little above 2 hours and I stopped working without finishing all I had planned for.

I included a small video as a demo in `demoComponentStarrer.mov` at the root level of the repo.

Callouts:
- I included external libraries:
  - Styled component for styling as I feel it cleans up the JSX code and is straight-forward to use
  - Debounce hook to handle input and api searches in a way that doesn't spam our back-end
  - Prettier so basic code styling is enforced in the repo
  - I used svg I found online for the search icon and stars in both states.

What I didn't get a chance to work on.
- Handling pagination. I had started with the idea of adding a Previous, Next and First and Last buttons for pagination at the end of the page, but didn't get enough time to implement it. 
- Responsive styling, right now the results don't display well on small devices
- Tests, I didn't include any tests. For a production project I would expect all components to be tested with snapshots and react-testing-library to simulate integrations as well.
- Linting, I didn't include any configuration for a linter as it takes a bit of time to setup right, but in a production build this would be a must.
- TypeScript. For production code I would prefer to use TypeScript as it usually catches a lot of issues in the data models earlier rather than later. Skipping TS made me a bit faster to get started but it would not pay off in the long run.
- Proper error handling. Right now we don't test for non-expected data formats. This would need to be handled both in the components and the API layer.
