import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from ".";

describe('Counter Component', () => {
  test('Should init the title with value 0', () => {
      render(<Counter />)

      const counterTitle = screen.getByText('0'); // Procura o elemento e retorna, se não acha o elemento dá erro e falha o teste
      const counterTitleWithQuery = screen.queryByText('0'); // Procura o elemento e retorna, se não acha o elemento retorna null e não quebra o teste
      const counterTitleWithFind = screen.findByText('0'); // Retorna uma promisse ao invés do elemento
      expect(counterTitle).toBeInTheDocument();
  })

  test('Should contain class counter__title no título', () => {
    render(<Counter />)

    const counterTitle = screen.getByText('0');
    expect(counterTitle).toHaveClass('counter__title');
  })

  test('Should not contain decrement or increment class in the beginning', () => {
    render(<Counter />)

    const counterTitle = screen.getByText('0');
    expect(counterTitle).not.toHaveClass('counter__title--increment');
    expect(counterTitle).not.toHaveClass('counter__title--decrement');
  })

  test('Should have a increment and a decrement button', () => {
    render(<Counter />)

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i });
    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i });

    expect(buttonIncrement).toBeInTheDocument()
    expect(buttonDecrement).toBeInTheDocument()
  })

  test('Increment button should have two class button and button-increment', () => {
    render(<Counter />)

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i });

    expect(buttonIncrement).toHaveClass("button")
    expect(buttonIncrement).toHaveClass("button--increment")
  })

  test('Decrement button should have two class button and button-decrement', () => {
    render(<Counter />)

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i });

    expect(buttonDecrement).toHaveClass("button")
    expect(buttonDecrement).toHaveClass("button--decrement")
  })

  test('Should increment plus one after the click in the increment button', () => {
    render(<Counter />)

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i });

    expect(screen.queryByText(1)).toBeNull();
    userEvent.click(buttonIncrement)

    expect(screen.getByText(1)).toBeInTheDocument();
  })

  test('Should decrement minus one after the click in the decrement button', () => {
    render(<Counter />)

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i });

    expect(screen.queryByText(-1)).toBeNull();
    userEvent.click(buttonDecrement)

    expect(screen.getByText(-1)).toBeInTheDocument();
  })

  test('Should have class counter__title--increment when title is greater than 1', () => {
    render(<Counter />)

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i });

    expect(screen.queryByText(0)).not.toHaveClass('counter__title--increment');
    userEvent.click(buttonIncrement)

    expect(screen.getByText(1)).toHaveClass('counter__title--increment');
  })

  test('Should have class counter__title--decrement when title is less than -1', () => {
    render(<Counter />)

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i });

    expect(screen.queryByText(0)).not.toHaveClass('counter__title--decrement');
    userEvent.click(buttonDecrement)

    expect(screen.getByText(-1)).toHaveClass('counter__title--decrement');
  })
})