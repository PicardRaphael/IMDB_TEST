import StoryRouter from 'storybook-react-router';

export const decorators = [
  StoryRouter(),
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story/>
    </div>
  ),
];
