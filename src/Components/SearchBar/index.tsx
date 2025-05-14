import { useDispatch, useSelector } from 'react-redux'
import { SearchBarSection } from './styles'
import type { RootReducer } from '../../Store'
import { alteraTermo } from '../../Store/reducers/filtro'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <SearchBarSection>
      <input
        type="text"
        onChange={(e) => dispatch(alteraTermo(e.target.value))}
        placeholder="Pesquisar contatos"
        value={termo}
      />
    </SearchBarSection>
  )
}
export default SearchBar
