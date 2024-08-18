"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Congratulations, your extension "vscode-copilot" is now active!');
    // Register a command for code generation
    let generateCodeCommand = vscode.commands.registerCommand('vscode-copilot.generateCode', () => __awaiter(this, void 0, void 0, function* () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            const generatedCode = `// Generated code for: ${text}`;
            editor.edit(editBuilder => {
                editBuilder.replace(selection, generatedCode);
            });
            vscode.window.showInformationMessage('Code generated!');
        }
        else {
            vscode.window.showInformationMessage('No active editor found.');
        }
    }));
    context.subscriptions.push(generateCodeCommand);
    // Register a command for custom debug action
    let customDebugCommand = vscode.commands.registerCommand('vscode-copilot.customDebugAction', () => {
        vscode.window.showInformationMessage('Custom Debug Action triggered!');
    });
    context.subscriptions.push(customDebugCommand);
    // Register completion item provider
    const completionProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'typescript' }, {
        provideCompletionItems(document, position, token, context) {
            const completionItems = [];
            const item = new vscode.CompletionItem('HelloWorld', vscode.CompletionItemKind.Text);
            item.insertText = 'Hello, World!';
            item.documentation = 'Inserts "Hello, World!"';
            completionItems.push(item);
            return completionItems;
        }
    }, '.');
    context.subscriptions.push(completionProvider);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
