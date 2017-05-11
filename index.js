module.exports = {

	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},

	"rules": {
		"arrow-body-style": [ 2, "as-needed", {
			"requireReturnForObjectLiteral": false
		}],
		"arrow-parens": [ 2, "as-needed", {
			"requireForBlockBody": false
		}],
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
			"allowParens": true
		}],
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-imports": [ 2, {
			"includeExports": true
		}],
		"no-new-symbol": 2,
		"no-restricted-imports": 0,
		"no-this-before-super": 2,
		"no-useless-computed-key": 2,
		"no-useless-constructor": 2,
		"no-useless-rename": [ 2, {
			"ignoreDestructuring": false,
			"ignoreImport": false,
			"ignoreExport": false
		}],
		"no-var": 2,
		"object-shorthand": [ 2, "always", {
			"avoidExplicitReturnArrows": false,
			"avoidQuotes": false,
			"ignoreConstructors": false
		}],
		"prefer-arrow-callback": [ 2, {
			"allowNamedFunctions": true,
			"allowUnboundThis": false
		}],
		"prefer-const": [ 2, {
			"destructuring": "any",
			"ignoreReadBeforeAssign": false
		}],
		"prefer-destructuring": 0,
		"prefer-numeric-literals": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"prefer-template": 2,
		"require-yield": 2,
		"rest-spread-spacing": 0,
		"sort-imports": 0,
		"symbol-description": 2,
		"template-curly-spacing": [ 2, "never" ],
		"yield-star-spacing": [ 2, {
			"after": true,
			"before": true
		}]
	}
};
