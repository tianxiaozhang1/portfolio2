'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../libX/store';
import { initializeCount } from '../libX/features/counter/counterSlice'

export default function StoreProvider({ children }) {
    const storeRef = useRef()
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = makeStore()
      storeRef.current.dispatch(initializeCount(count))
    }
  
    return <Provider store={storeRef.current}>{children}</Provider>
}