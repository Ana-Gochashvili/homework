import Header from "./header";
import Footer from "./footer";
import Section from "./section";

const style = {
    backgroundColor: 'rgb(40, 40, 67)',
    alignContent: 'center',
}

const divStyle = {
    fontFamily: '\'Poppins\', sans-serif',
    margin: 40,
    padding: 40,
}

function App() {
    return (
        <div style={style}>
            <div style={divStyle}>
                <Header title='My Website!'/>
                <Section/>

                <Footer text={'© Footbar Inc.'}/>
            </div>

        </div>
    )
}


export default App;
