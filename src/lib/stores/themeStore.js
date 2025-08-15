import { writable } from 'svelte/store';

// Theme options: 'dark' or 'light'
export const theme = writable('dark');

// Toggle theme function
export function toggleTheme() {
  theme.update(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
}