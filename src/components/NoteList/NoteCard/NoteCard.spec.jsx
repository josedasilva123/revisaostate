/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import NoteCard from "."
import { render, screen } from "@testing-library/react"

const mock = {
    _id: "123456",
    userID: "654321",
    title: "Nota 1",
    text:  "Está é a nota número 1",
    createdAt: "Data de criação",
    updatedAt: "Data de atualização",
    __v: 1,
}

describe("<NoteCard />", () => {
    it("should render a card with notes information", () => {
        render(<NoteCard note={mock} />);    

        //expect.assertions(2);
        
        const title = screen.getByText("Nota 1");
        expect(title).toBeInTheDocument();

        const text = screen.getByText("Está é a nota número 1");
        expect(text).toBeInTheDocument(); 
    })

    it("should contain the delete button", () => {
        render(<NoteCard note={mock} />);
      
        const title = screen.getByTitle("Delete");
        expect(title).toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const { container } = render(<NoteCard note={mock} />);
        expect(container).toMatchSnapshot();
    })
})



