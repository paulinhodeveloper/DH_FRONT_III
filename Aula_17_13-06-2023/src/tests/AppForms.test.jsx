import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "../components/Form";
import { Button } from "../components/Button";

describe("Teste de validação do formulário", () => {
  it("Deve validar corretamente a entrada no formulário", () => {
    render(<Form />);
    const input = screen.getByAltText("name");
    expect(input.value).not.toEqual(expect.any(Number));
  });
});

describe("Teste de evento do botão", () => {
  it("Deve disparar o evento ao clicar no botão", () => {
    const click = jest.fn();
    render(<Button onClick={click} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(click).toHaveBeenCalledTimes(1);
  });
});
