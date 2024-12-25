import { createContext } from 'react';

    export const SettingsContext = createContext({
      companyName: 'Sinlexon Construction',
      homePhoto: 'https://placekitten.com/800/400',
      portfolioPhoto: 'https://placekitten.com/801/400',
      updateSettings: () => {},
    });
