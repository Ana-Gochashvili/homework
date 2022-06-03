const style = {
    margin: 0,
    padding: 15,
    textAlign: 'center',
    color: 'rgb(205, 199, 199)',
    backgroundColor: 'rgb(92, 61, 61)',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
}

function Footer({text}) {


    return (
        <footer style={style}>
            {text}
        </footer>)
}

export default Footer;