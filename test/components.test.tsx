import { act, createRef, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';
import {
  Alert,
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
  Select,
  SingleColumnLayout,
  UnorderedList,
} from '../src';

// Tell React this is a test environment, so act() works without warnings
(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;

function render(element: ReactNode): HTMLDivElement {
  container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(element);
  });
  return container;
}

afterEach(() => {
  container.remove();
});

describe('components', () => {
  it('render their elements with children', () => {
    const el = render(
      <SingleColumnLayout header={<Header>Header</Header>} footer={<p>Foot</p>}>
        <Section as="main">
          <Panel>
            <H2>H2</H2>
            <H3>H3</H3>
            <H4>H4</H4>
            <H5>H5</H5>
            <Alert variant="warning">Alert</Alert>
            <UnorderedList>
              <li>Item</li>
            </UnorderedList>
            <DescriptionList>
              <DescriptionListItem title="Term">Detail</DescriptionListItem>
            </DescriptionList>
          </Panel>
        </Section>
      </SingleColumnLayout>
    );

    expect(el.querySelector('header')?.textContent).toBe('Header');
    expect(el.querySelector('main')).not.toBeNull();
    for (const tag of ['h2', 'h3', 'h4', 'h5']) {
      expect(el.querySelector(tag)?.textContent).toBe(tag.toUpperCase());
    }
    expect(el.querySelector('dt')?.textContent).toBe('Term');
    expect(el.querySelector('dd')?.textContent).toBe('Detail');
  });

  it('merge custom class names with their own', () => {
    const el = render(<Panel className="custom">Panel</Panel>);
    const panel = el.firstElementChild;
    expect(panel?.classList.contains('custom')).toBe(true);
    expect(panel?.classList.contains('rounded-md')).toBe(true);
  });

  it('forward refs to form elements and links', () => {
    const anchor = createRef<HTMLAnchorElement>();
    const button = createRef<HTMLButtonElement>();
    const input = createRef<HTMLInputElement>();
    const select = createRef<HTMLSelectElement>();

    render(
      <>
        <Anchor ref={anchor} href="#">
          Link
        </Anchor>
        <Button ref={button} variant="primary">
          Button
        </Button>
        <Input ref={input} aria-label="Input" />
        <Select ref={select} aria-label="Select">
          <option>Option</option>
        </Select>
      </>
    );

    expect(anchor.current).toBeInstanceOf(HTMLAnchorElement);
    expect(button.current).toBeInstanceOf(HTMLButtonElement);
    expect(input.current).toBeInstanceOf(HTMLInputElement);
    expect(select.current).toBeInstanceOf(HTMLSelectElement);
  });
});
