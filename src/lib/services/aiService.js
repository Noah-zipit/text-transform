const AI_ENDPOINT = 'https://ab-chatgpt4o.abrahamdw882.workers.dev/';

/**
 * Transform text using the specified style
 * @param {string} text - The input text to transform
 * @param {object} style - The style object with prompt template
 * @returns {Promise<string>} - The transformed text
 */
export async function transformText(text, style) {
  try {
    // Create the full prompt by combining the style prompt and user text
    const fullPrompt = `${style.prompt} "${text}"`;
    
    // Encode the prompt for URL
    const encodedPrompt = encodeURIComponent(fullPrompt);
    
    // Make the request to the AI service
    const response = await fetch(`${AI_ENDPOINT}?q=${encodedPrompt}`);
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    // Parse the response as JSON
    const jsonResponse = await response.json();
    
    // Extract the data field from the JSON response
    if (jsonResponse.status === "success" && jsonResponse.data) {
      return jsonResponse.data;
    } else {
      throw new Error("Invalid response format from API");
    }
  } catch (error) {
    console.error('Error transforming text:', error);
    throw error;
  }
}