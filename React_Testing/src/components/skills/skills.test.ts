import { render, screen, logRoles } from "@testing-library/react";
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

	test("renders login Button", () => {
		render(<Skills skills={skills} />);
		const loginButton = screen.getByRole("button", {
			name: "Login",
		});
		expect(loginButton).toBeInTheDocument();
	});

	test("Start Learning Button is not rendered", () => {
		render(<Skills skills={skills} />);
		const startLearningButton = screen.queryByRole("button", {
			name: "Start Learning",
		});
		expect(startLearningButton).not.toBeInTheDocument();
	});

	test("Start Learning Button is eventually displayed", () => {
		const view = render(<Skills skills={skills} />);
		logRoles(view.container)
		screen.debug()
		const startLearningButton = screen.findByRole("button", {
			name: "Start Learning",
		},
		{
			timeout: 2000,
		});
		expect(startLearningButton).toBeInTheDocument();
	})
})