import "./ModalWindow.sass"

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

function ModalWindow({children}: Props) {
    return (
      <div id="modal-window">
        {children}
      </div>
    )
  }
  
export default ModalWindow