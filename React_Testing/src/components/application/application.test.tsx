import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
	test("renders correctly", () => {
		render( <Application />)

		const pageHeading = screen.getByRole("heading", {
			name: "Job Application Form",
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole("heading", {
			name: "Section 1",
			level: 2,
		})
		expect(sectionHeading).toBeInTheDocument();

		const paragrahElement = screen.getByText("All fields are mandatory");
		expect(paragrahElement).toBeInTheDocument();

		const closeElement = screen.getByTitle("close");
		expect(closeElement).toBeInTheDocument();

		const imageElement = screen.getByAltText("Image Github");
		expect(imageElement).toBeInTheDocument();

		const customElement = screen.getByTestId("custom-element");
		expect(customElement).toBeInTheDocument();

		const nameElement = screen.getByRole("textbox", {
			name: "name",
		});
		expect(nameElement).toBeInTheDocument();
		
		const nameElement2 = screen.getByLabelText("Name", {
			selector: "input",

		});
		expect(nameElement2).toBeInTheDocument();

		const nameElement3 = screen.getByPlaceholderText("Fullname");
		expect(nameElement3).toBeInTheDocument();

		const nameElement4 = screen.getByDisplayValue("Vishwas");
		expect(nameElement4).toBeInTheDocument();

		const bioElement = screen.getByRole("textbox", {
			name: "Bio"
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox");
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole("checkbox");
		expect(termsElement).toBeInTheDocument();

		const termsElement2 = screen.getByLabelText("I agree to the terms");
		expect(termsElement2).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect(submitButtonElement).toBeInTheDocument();
	});
})
