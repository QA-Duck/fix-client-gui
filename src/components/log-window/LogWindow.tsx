
type Props = {
    children: string[] | JSX.Element | JSX.Element[]
  }

function LogWindow({children}: Props) {
    return(
        <textarea name="" id="" cols={30} rows={10}>
            {children}
        </textarea>
    )
}


export default LogWindow