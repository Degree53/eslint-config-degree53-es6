module.exports = {

	"parser": "babel-eslint",
	
	"parserOptions": {
		"ecmaFeatures": {
			"globalReturn": false
		},
		"ecmaVersion": 6,
		"sourceType": "module"
	}

	"rules": {
		"arrow-body-style": [ 2, "as-needed" ],
		"arrow-parens": [ 2, "as-needed" ],
		"arrow-spacing": [ 2, {
			"after": true,
			"before": true
		}],
		"constructor-super": 2,
		"generator-star-spacing": [ 2, {
			"after": true,
			"before": true
		}],
		"no-class-assign": 2,
		"no-confusing-arrow": [ 2, {
			"allowParens": false
		}],
		"no-const-assign": 2,
		"no-constant-condition": 2,
		"no-dupe-class-members": 2,
		"no-this-before-super": 2,
		"no-var": 2,
		"object-shorthand": [ 2, "always" ],
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"prefer-reflect": 0, // Requires polyfill
		"prefer-spread": 2,
		"prefer-template": 2,
		"require-yield": 2
	}

};
