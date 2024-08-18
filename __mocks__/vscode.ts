export const commands = {
    executeCommand: jest.fn().mockResolvedValue(undefined),
  };
  
  export const window = {
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
  
  export const extensions = {
    getExtension: jest.fn().mockReturnValue({
      activate: jest.fn(),
    }),
  };
  
  export const workspace = {
    getConfiguration: jest.fn().mockReturnValue({
      get: jest.fn(),
    }),
  };