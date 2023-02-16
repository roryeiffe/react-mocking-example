import React from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import Players from './components/players';


const queryClient = new QueryClient();

function App() {


  return <>
  <QueryClientProvider client = {queryClient}>
    
    <Players/>

  </QueryClientProvider>
  </>
}

export default App;
