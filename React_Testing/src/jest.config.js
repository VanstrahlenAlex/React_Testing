// src/setupTests.js
import '@testing-library/jest-dom';
// jest.config.js

export default {
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
};


