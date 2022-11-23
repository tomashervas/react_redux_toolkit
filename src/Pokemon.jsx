import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/thunks'


export const Pokemon = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    
    }, [])
  
  
    return (
    <div>
        <h1>Pokemon</h1>

    </div>
  )
}
