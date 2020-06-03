import { useState } from "react";
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('dark', false);
    return [mode, setMode];
}