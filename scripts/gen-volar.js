import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import * as srcComponents from '../src';

// The file is not designed to run directly. `process.cwd()` should be project root.
const ROOT = process.cwd();
const OUTPUT = path.resolve(ROOT, 'types/volar.d.ts');

// REF: https://github.com/tusen-ai/naive-ui/blob/main/scripts/gen-component-declaration.js
const componentPrefix = 'XN';
const componentExcludes = [];

function parseComponentsDeclaration(code) {
    if (!code) {
        return {};
    }
    return Object.fromEntries(
        Array.from(code.matchAll(/(?<!\/\/)\s+\s+['"]?(.+?)['"]?:\s(.+?)\n/g)).map((i) => [i[1], i[2]])
    );
}

function generateComponentsType() {
    const components = {};
    Object.keys(srcComponents).forEach((key) => {
        const entry = `(typeof import('@skit/x.naive-ui'))['${key}']`;
        if (key.startsWith(componentPrefix) && !componentExcludes.includes(key)) {
            components[key] = entry;
        }
    });

    const originalContent = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, 'utf-8') : '';
    const originalImports = parseComponentsDeclaration(originalContent);
    const lines = Object.entries({ ...originalImports, ...components })
        .filter(([key]) => !!components[key])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, v]) => {
            if (!/^\w+$/.test(name)) {
                name = `'${name}'`;
            }
            return `${name}: ${v};`;
        });
    const content = `// Auto generated component declarations
declare module 'vue' {
    export interface GlobalComponents {
        ${lines.join('\r\n        ')}
    }
}

export {};
`;

    if (content !== originalContent) {
        fs.writeFileSync(OUTPUT, content, 'utf-8');
    }
}

generateComponentsType();
