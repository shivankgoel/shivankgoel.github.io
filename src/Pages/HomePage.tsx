import React from "react";
import {
    Stack,
} from "@chakra-ui/react";
import { Nav } from "../Components/Nav";
import { Hero } from "../Components/Hero";


export const HomePage = (): JSX.Element => {
    return (
        <Stack>
            <Nav />
            <Hero />
        </Stack>
    )
};