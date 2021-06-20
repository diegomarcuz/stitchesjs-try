import { createContext, ReactElement, useState } from 'react'

interface GenreContext {
    selectedGenre: {
        id: number;
        name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
        title: string;
    },
    setSelectedGenre: Function;
}
interface GenreContextProps {
    children: ReactElement,
}


export const GenreContext = createContext({} as GenreContext);



export function GenreProvider({ children }: GenreContextProps) {
    const [selectedGenre, setSelectedGenre] = useState({
        id: 1,
        name: "action",
        title: "Ação"
    });



    return (
        <GenreContext.Provider
            value={{
                selectedGenre,
                setSelectedGenre
            }}
        >
            {children}
        </GenreContext.Provider>
    )
}