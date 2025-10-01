export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended',
	],
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-selector-bem-pattern',
	],
	rules: {
		'selector-class-pattern': null, // for bem
		// 'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
		'plugin/selector-bem-pattern': {
			preset: 'bem',
			// componentName: '[a-z-]+',
			// componentSelectors: {
			// 	initial: '^\\.{componentName}(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$',
			// 	combined: '^\\.{componentName}(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$',
			// },
		},
	},
};
