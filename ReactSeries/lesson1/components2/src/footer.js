
const footer = () =>{
    const date = new Date();
    return (
        <footer>
            <h6>Copyright &copy; {date.getFullYear()}</h6>
        </footer>
    )
}


export default footer;