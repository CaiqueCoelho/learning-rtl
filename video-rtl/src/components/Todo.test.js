import React from 'react';
import { render, wait, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from './Todo'

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submited', async () => {
        render(<Todo/>)

        const fieldNode = await screen.findByTestId('form-field');

        const newTask = 'testing';
        userEvent.type(fieldNode, newTask);

        expect(fieldNode.value).toEqual(newTask);

        const saveBtn = await screen.findByTestId('form-btn');
        userEvent.click(saveBtn)

        const tableNode = await screen.findByTestId('table')
        const tdNode = await screen.findByText(newTask)

        expect(tdNode).toBeDefined();
    })
})