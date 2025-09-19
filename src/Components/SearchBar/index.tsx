import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../Store'
import { alteraTermo } from '../../Store/reducers/filtro'
import { SearchBarSection } from './styles'
import HamburgerMenu from '../../HamburgerMenu'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <SearchBarSection>
      <div className="input-container">
        <HamburgerMenu />

        <input
          type="text"
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
          placeholder="Pesquisar contatos"
          value={termo}
        />
      </div>
    </SearchBarSection>
  )
}
export default SearchBar
