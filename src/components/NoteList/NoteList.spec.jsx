/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import NoteList from ".";
import { NotesContext } from "../../contexts/NotesContext";

describe("<NoteList />", () => {
  it("should render card list", () => {
    const providerProps = {
      notes: [
        {
          _id: "123456",
          userID: "654321",
          title: "Nota 1",
          text: "Está é a nota número 1",
          createdAt: "Data de criação",
          updatedAt: "Data de atualização",
          __v: 1,
        },
        {
          _id: "654321",
          userID: "654321",
          title: "Nota 2",
          text: "Está é a nota número 2",
          createdAt: "Data de criação",
          updatedAt: "Data de atualização",
          __v: 1,
        },
      ],
    };

    render(
      <NotesContext.Provider value={providerProps}>
        <NoteList />
      </NotesContext.Provider>
    );

    expect(screen.getByText("Nota 1")).toBeInTheDocument();
    expect(screen.getByText("Nota 2")).toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(2);
  });

  it("should render no note message and notes is empty", () => {
    const providerProps = {
      notes: [],
    };

    render(
      <NotesContext.Provider value={providerProps}>
        <NoteList />
      </NotesContext.Provider>
    );

    expect(screen.getByText(/Nenhuma nota cadastrada/i)).toBeInTheDocument();

  });

  it("should match snapshot", () => {
    const providerProps = {
      notes: [
        {
          _id: "123456",
          userID: "654321",
          title: "Nota 1",
          text: "Está é a nota número 1",
          createdAt: "Data de criação",
          updatedAt: "Data de atualização",
          __v: 1,
        },
        {
          _id: "654321",
          userID: "654321",
          title: "Nota 2",
          text: "Está é a nota número 2",
          createdAt: "Data de criação",
          updatedAt: "Data de atualização",
          __v: 1,
        },
      ],
    };
    
    const { container } = render(
      <NotesContext.Provider value={providerProps}>
        <NoteList />
      </NotesContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
