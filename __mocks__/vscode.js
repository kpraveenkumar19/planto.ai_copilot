"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspace = exports.extensions = exports.window = exports.commands = void 0;
exports.commands = {
    executeCommand: jest.fn().mockResolvedValue(undefined),
};
exports.window = {
    showInformationMessage: jest.fn(),
    activeTextEditor: {
        document: {
            getText: jest.fn().mockReturnValue('sample text'),
        },
        selection: {
            start: { line: 0, character: 0 },
            end: { line: 0, character: 0 },
        },
        edit: jest.fn(),
    },
};
exports.extensions = {
    getExtension: jest.fn().mockReturnValue({
        activate: jest.fn(),
    }),
};
exports.workspace = {
    getConfiguration: jest.fn().mockReturnValue({
        get: jest.fn(),
    }),
};
