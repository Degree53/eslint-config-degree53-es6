module.exports = {

	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},

	"rules": {
		"arrow-body-style": [ 2, "as-needed" ],
		"arrow-parens": [ 2, "as-needed" ],
		"arrow-spacing": [ 2, {
			"after": true,
			"before": true
		}],
		"constructor-super": 2,
		"generator-star-spacing": [ 2, "both" ],
		"no-class-assign": 2,
		"no-confusing-arrow": [ 2, {
			"allowParens": false
		}],
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-imports": 2,
		"no-new-symbol": 2,
		"no-restricted-imports": 0,
		"no-this-before-super": 2,
		"no-useless-constructor": 2,
		"no-var": 2,
		"object-shorthand": [ 2, "always" ],
		"prefer-arrow-callback": 2,
		"prefer-const": [ 2, {
			"destructuring": "any"
		}],
		"prefer-reflect": 0, // Requires babel polyfill
		"prefer-spread": 2,
		"prefer-template": 2,
		"require-yield": 2,
		"template-curly-spacing": [ 2, "never" ],
		"yield-star-spacing": [ 2, "both" ]
	}

};
