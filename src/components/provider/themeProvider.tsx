"use client"
import {PropsWithChildren, useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/components/context/ThemeContext";


export const ThemeProvider = (props: PropsWithChildren) => {

    const theme = useContext(ThemeContext);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(mounted){
        return (
            <div className={theme?.theme}>
                {props.children}
            </div>
        )
    }


}