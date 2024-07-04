import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";


describe("Skills", () => {
	const skills = ["React", "Typescript", "Javascript", "HTML", "CSS"];
	test("renders correctly", () => {
		render(<Skills skills={skills} />);
		const listElement = screen.getByRole("list");
		expect(listElement).toBeInTheDocument();
	})

	test("renders a list of skills", () => {
		render(<Skills skills={skills} />);
		const listElements = screen.getAllByRole("listitem");
		expect(listElements).toHaveLength(skills.length);
	})

})