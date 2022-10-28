/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from ".";
import { UserProvider } from "../../contexts/UserContext";
import { api } from "../../api/api";
import MockAdapter from "axios-mock-adapter";
import React from "react";


jest.mock("react-router-dom" ,() => ({
  useNavigate: () => jest.fn(),
}))


const apiMock = new MockAdapter(api);

describe("<LoginForm/>", () => {
  it("should be able to login", async () => {
    apiMock.onPost("user/login").replyOnce(200, {});

    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(
      <UserProvider>
        <LoginForm />
      </UserProvider>
    );

    const email = screen.getByPlaceholderText("E-mail");
    const password = screen.getByPlaceholderText("Senha");
    const submit = screen.getByText("Entrar");

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    fireEvent.change(email, { target: { value: "alex@kenzie.com.br" } });
    fireEvent.change(password, { target: { value: "@12Patinhos" } });
    fireEvent.click(submit);

    await waitFor(() => {
      expect(email).toHaveValue("alex@kenzie.com.br");
      expect(password).toHaveValue("@12Patinhos");
      expect(setStateMock).toHaveBeenCalledTimes(2);
    });
  });

  it("should not be able to login", async () => {
    apiMock.onPost("user/login").replyOnce(400, {});

    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(
      <UserProvider>
        <LoginForm />
      </UserProvider>
    );

    const email = screen.getByPlaceholderText("E-mail");
    const password = screen.getByPlaceholderText("Senha");
    const submit = screen.getByText("Entrar");

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    fireEvent.change(email, { target: { value: "alex@kenzie.com.br" } });
    fireEvent.change(password, { target: { value: "@12Patinhos" } });
    fireEvent.click(submit);

    await waitFor(() => {
      expect(email).toHaveValue("alex@kenzie.com.br");
      expect(password).toHaveValue("@12Patinhos");
      expect(setStateMock).not.toHaveBeenCalledTimes(2);
    });
  });
});
