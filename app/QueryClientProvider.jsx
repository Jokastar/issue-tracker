"use client"; 

import { QueryClient, QueryClientProvider as QueryClientProviderWrapper} from "react-query"; 

import React from 'react'

const QueryClientProvider = ({children}) => {
    const queryClient = new QueryClient(); 
  return (
    <QueryClientProviderWrapper client={queryClient}>
        {children}
    </QueryClientProviderWrapper>
  )
}

export default QueryClientProvider