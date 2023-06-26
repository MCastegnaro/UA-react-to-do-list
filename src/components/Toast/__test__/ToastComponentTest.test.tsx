import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toast } from "..";
// import { axe } from "jest-axe";
import '@testing-library/jest-dom/extend-expect';

describe("<Toast Component>", () => {
  it('Deve renderizar o Toast com uma mensagem de sucesso', () => {
    const message = 'Success message';
    const type = 'success';

    render(<Toast message={message} type={type} />);

    const toastElement = screen.getByText(/Success message/i);

    expect(toastElement).toBeInTheDocument();
  });

  it('Deve renderizar o Toast de sucesso', () => {
    const message = 'Success message';
    const type = 'success';

    render(<Toast message={message} type={type} />);

    const toastElement = screen.getByText(/success/i);

    expect(toastElement).toBeInTheDocument();
  });

  it('Deve renderizar o Toast com uma mensagem de erro', () =>{
    const message = 'Danger message';
    const type = 'danger';
    render(<Toast message={message} type={type} />);
    const toastElement = screen.findByText(/Danger message/i);
    expect(toastElement).not.toBeNull();
  })

  // it('should have no accessibility violations', async () => {
  //   const message = 'Success message';
  //   const type = 'success';

  //   const { container } = render(<Toast message={message} type={type} />);

  //   const results = await axe(container);

  //   expect(results).toHaveNoViolations();
  // });
});
