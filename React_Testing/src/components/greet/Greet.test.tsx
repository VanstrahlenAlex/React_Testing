// src/components/greet/Greet.test.tsx
import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';  // Importa jest-dom para los matchers personalizados
import Greet from "./Greet";

describe('Greet', () => {

	test('Greet renders correctly', () => {
	render(<Greet name='Alexander'/>);
	const textElement = screen.getByText('Hello Alexander');
	expect(textElement).toBeInTheDocument();
	});

	test('Greet renders with a name', () => {
	render(<Greet name='Vishwas' />);
	const textElement = screen.getByText('Hello Vishwas');
	expect(textElement).toBeInTheDocument();
	});

})