import React, { useEffect, useState } from "react"
import store from "./"

export default function useGlobalUIState(slicer = state => state) {
  const [slice, setSlice] = useState(slicer(store.getState()))

  useEffect(() => {
    store.subscribe(() => {
      setSlice(store.getState())
    })
  }, [store, slicer, setSlice])

  return [slice]
}
