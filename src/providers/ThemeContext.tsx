import { createContext, PropsWithChildren, useContext, useState } from "react";
import { TContext } from "../types/types";


export const createdContext = createContext<TContext>(['', () => {}]);

function ThemeContext({children} : PropsWithChildren<{}>) {

    const [color, setColor] = useState("light");

    return ( <>
        <createdContext.Provider value={[color, setColor]}>
            {children}
        </createdContext.Provider>
    </>);
}

export default ThemeContext;