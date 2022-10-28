/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from ".";
import { UserProvider } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import MockAdapter from "axios-mock-adapter";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockApi = new MockAdapter(api);

describe("<RegisterForm />", () => {
  it("should be able to register", async () => {
    mockApi.onPost("user").reply(200, {});

    render(
      <UserProvider>
        <RegisterForm />
      </UserProvider>
    );

    const name = screen.getByPlaceholderText("Nome");
    const email = screen.getByPlaceholderText("E-mail");
    const password = screen.getByPlaceholderText("Senha");
    const submit = screen.getByText("Cadastre-se");

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    fireEvent.change(name, { target: { value: "Alex Conder" } });
    fireEvent.change(email, { target: { value: "alex@email.com.br" } });
    fireEvent.change(password, { target: { value: "@12Patinhos" } });
    fireEvent.click(submit);

    await waitFor(() => {
      expect(name).toHaveValue("Alex Conder");
      expect(email).toHaveValue("alex@email.com.br");
      expect(password).toHaveValue("@12Patinhos");
    });
  });
});
