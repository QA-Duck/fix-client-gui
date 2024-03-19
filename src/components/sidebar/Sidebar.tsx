import './Sidebar.sass'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

function Sidebar({children}: Props) {
  return (
    <div id="sidebar">
      {children}
    </div>
  )
}
export default Sidebar