import { HamburgerIcon, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../Store'
import { toggleSidebar } from '../Store/reducers/sidebar'

const HamburgerMenu = () => {
  const dispatch = useDispatch()
  const open = useSelector((state: RootReducer) => state.sidebar.open)

  return (
    <>
      <HamburgerIcon open={open} onClick={() => dispatch(toggleSidebar())} />
      <Overlay open={open} onClick={() => dispatch(toggleSidebar())} />
    </>
  )
}

export default HamburgerMenu
