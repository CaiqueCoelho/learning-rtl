import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen } from '@testing-library/react'
import {Login} from '../login'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

test('calls onSubmit with username and password', () => {
    const handleSubmit = jest.fn()
    render(<Login onSubmit={handleSubmit}/>)

    screen.getByLabelText(/username/i).value = 'chuck'
    screen.getByLabelText(/password/i).value = 'norris'
    userEvent.click(screen.getByText(/submit/i))

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
        username: 'chuck',
        password: 'norris'
    });
})