export async function generateResponse(parsedAnalysis: any, executionResult: any, apiKey: string) {
  try {
    // The primary purpose is to return the message from the command execution.
    // Additional logic for more sophisticated natural language generation could be added here.
    
    if (executionResult && executionResult.message) {
      return executionResult.message;
    }
    
    // Fallback response if no message is available
    if (parsedAnalysis && parsedAnalysis.intent) {
      return `Command processed successfully. Intent: ${parsedAnalysis.intent}`;
    }
    
    return "Command executed successfully.";
  } catch (error) {
    console.error('Error generating response:', error);
    return "An error occurred while processing the command.";
  }
}

export function formatResponse(message: string, data?: any): string {
  if (data) {
    return `${message}\n\nData: ${JSON.stringify(data, null, 2)}`;
  }
  return message;
}

export function createErrorResponse(error: string): string {
  return `Error: ${error}`;
}