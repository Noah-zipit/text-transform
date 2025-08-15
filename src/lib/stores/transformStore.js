import { writable } from 'svelte/store';

// Store for the transformation history
export const transformHistory = writable([]);

// Add a transformation to history
export function addToHistory(input, style, output) {
  transformHistory.update(history => {
    const newEntry = {
      id: Date.now(),
      input,
      styleId: style.id,
      styleName: style.name,
      output,
      timestamp: new Date().toISOString()
    };
    
    // Keep only the last 10 transformations
    return [newEntry, ...history].slice(0, 10);
  });
}