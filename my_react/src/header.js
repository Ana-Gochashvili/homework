const style = {
    backgroundColor: 'rgb(63, 73, 97)',
    color: 'white',
    display: 'flex',
    alignContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
};

const h1Style = {
    fontSize: 100,
    fontStyle: 'italic',
    textAlign: 'left',
}

function Header({title}) {
    return (
        <header style={style}>
            <div style={{textAlign: 'center', alignContent: 'bottom', width: '30%'}}>
                <img src="/sample-page.png" alt={'logo'} style={{width: "200px", borderTopLeftRadius: 35}}/>
            </div>

            <div>
                <h1 style={h1Style}>{title}</h1>
            </div>
        </header>
    )
}

export default Header;