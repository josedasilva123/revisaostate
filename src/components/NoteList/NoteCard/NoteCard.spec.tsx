/* eslint-disable testing-library/no-node-access */
import NoteCard from "."
import { render, screen } from "@testing-library/react"

describe("<NoteCard />", () => {
    it("should render a card with notes information", () => {
        const data = {
            _id: "123456",
            userID: "654321",
            title: "Nota 1",
            text:  "Está é a nota número 1",
            createdAt: "Data de criação",
            updatedAt: "Data de atualização",
            __v: 1,
        }

        render(<NoteCard note={data} />);

        expect.assertions(2);
        
        const title = screen.getByText("Nota 1");
        expect(title).toBeInTheDocument();

        const text = screen.getByText("Está é a nota número 1");
        expect(text).toBeInTheDocument();
    })
})

