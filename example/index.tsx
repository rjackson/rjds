import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import {
  Alert,
  AlertsVariant,
  Anchor,
  Button,
  DescriptionList,
  DescriptionListItem,
  H2,
  H3,
  H4,
  H5,
  Header,
  Input,
  Panel,
  Section,
  SingleColumnLayout,
  UnorderedList,
} from '../.';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <SingleColumnLayout
        header={
          <Header className="text-center">
            <h1>Single column layout header</h1>
          </Header>
        }
        footer={
          <footer>
            <p>I am a footer</p>
          </footer>
        }
      >
        <Section>
          <Panel className="flex flex-col space-y-4">
            {(['success', 'info', 'warning', 'error'] satisfies AlertsVariant[]).map(variant => (
              <Alert key={variant} variant={variant}>
                I am an alert of {variant} proportions
              </Alert>
            ))}
            <Anchor href="https://google.com" target="_blank">
              Anchor link
            </Anchor>
            <Button onClick={() => setDarkMode(current => !current)}>
              Button (no variant specified)
            </Button>
            <Button
              variant="primary"
              onClick={() => setDarkMode(current => !current)}
            >
              Button (primary)
            </Button>
            <Button
              variant="secondary"
              onClick={() => setDarkMode(current => !current)}
            >
              Button (secondary)
            </Button>
            <DescriptionList>
              <DescriptionListItem title="An entry with a title">
                How good is that?
              </DescriptionListItem>
              <DescriptionListItem
                titleElement={<strong>An entry with a title element</strong>}
              >
                How good is that?
              </DescriptionListItem>
            </DescriptionList>
            <H2>H2 Heading</H2>
            <H3>H3 Heading</H3>
            <H4>H4 Heading</H4>
            <H5>H5 Heading</H5>
            <Input placeholder="Input element" />
            <UnorderedList>
              <li>One list item</li>
              <li>Two list items</li>
              <li>Three list items</li>
              <li>Four list items</li>
            </UnorderedList>
          </Panel>
        </Section>
      </SingleColumnLayout>
    </div>
  );
};

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App />);
