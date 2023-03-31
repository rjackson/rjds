import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import {
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
  return (
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
          <Anchor href="https://google.com" target="_blank">
            Anchor link
          </Anchor>
          <Button>Button</Button>
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
  );
};

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App />);
