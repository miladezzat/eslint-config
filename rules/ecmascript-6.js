'use strict';

module.exports = {
    rules: {
        // require space before/after arrow function's arrow
        // https://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],
    
        // verify super() callings in constructors
        'constructor-super': 'error',
    
        // enforce the spacing around the * in generator functions
        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: false, after: true }],
    
        // disallow modifying variables of class declarations
        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',
    
        // disallow arrow functions where they could be confused with comparisons
        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': ['error', {
            allowParens: true,
        }],
    
        // require braces around arrow function bodies
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],

        // require parentheses around arrow function arguments
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['error', 'as-needed'],

        // disallow reassigning const variables
        'no-const-assign': ['error'],

        // disallow duplicate class members
        'no-dupe-class-members': ['error'],

        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': ['error'],

        // require method and property shorthand syntax for object literals
        'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
  
        // disallow unnecessary constructors
        'no-useless-constructor': ['error'],

        // require let or const instead of var
        'no-var': ['error'],

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': ['error'],

        // require template literals instead of string concatenation
        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': ['error'],

        // require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': ['error', 'never'],

        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
        
        // Prefer destructuring from arrays and objects
        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': ['error', {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: true,
                object: false,
            },
        }, {
            enforceForRenamedProperties: false,
        }],

        // import sorting
        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
    },
};
