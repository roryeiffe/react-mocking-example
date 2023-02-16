import { render, screen } from "@testing-library/react"
import Players from "../components/players"
import { QueryClientProvider, QueryClient } from 'react-query'
import React from "react";

const queryClient = new QueryClient();

// mock the return of the basketball api using the __mock__ folder:
jest.mock('../requests/basketball-api')

test("Rendering player names correctly", async () => {
    // render the players component with a Query Client provider:
    render(
        <QueryClientProvider client={queryClient}>
            <Players />
        </QueryClientProvider>
    );

    // When the component is rendered, it will use the mocked value of players:
    const text = await screen.findByText(/Mocked Billy/);
})
