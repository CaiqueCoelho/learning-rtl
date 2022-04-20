import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import {render, cleanup} from '@testing-library/react'

afterEach(cleanup)

function ContactList(props) {
    if (!props.contacts || !props.contacts.length) {
        return <div>No contacts</div>;
    }
    return (
        <ul>
            {props.contacts.map(({name, id}) => (
                <li key={id} data-testid="contact-name">
                    {name}
                </li>
            ))}
        </ul>
    )
}

function Header(props) {
    return (
        <header>
            <h1 data-testid="h1tag" className="fancy-h1">{props.text}</h1>
        </header>
    );
}

test("renders 'no contacts' when there are no contacts", () => {
    const { getByText } = render(<ContactList/>);
    expect(getByText(/no contacts/i)).toBeInTheDocument();
})

test("renders contacts", () => {
    const fakeContacts = [{id: 1, name: "Caique"}, {id: 2, name: "Ícaro"}, {id: 3, name: "Juraci"}, {id: 4, name: "Lúcia"}]
    const { getAllByTestId } = render(<ContactList contacts={fakeContacts}/>);
    const contactNames = getAllByTestId('contact-name').map(li => li.textContent);
    const fakeContactNames = fakeContacts.map(c => c.name);
    expect(contactNames).toEqual(fakeContactNames)
    expect(contactNames).toMatchInlineSnapshot(`
Array [
  "Caique",
  "Ícaro",
  "Juraci",
  "Lúcia",
]
`)
})

it("render header", () => {
    const { asFragment } = render(<Header text="Hello!" />);

    expect(asFragment()).toMatchSnapshot();
})

it("inserts text in h1", () => {
    const { getByTestId, getByText } = render(<Header text="Hello!"/>)
    expect(getByTestId('h1tag')).toHaveTextContent("Hello!");
    expect(getByText('Hello!')).toHaveClass("fancy-h1")
})