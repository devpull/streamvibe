export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		// 'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
	},
};
