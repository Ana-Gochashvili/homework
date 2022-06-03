const style = {
    display: 'flex',
    background: 'white',
    padding: 1,
}
const navStyle = {
    width: '30%'
}
const artStyle = {
    padding: 30,
    width: '70%'
}
const navList = {
    listStyleType: 'none',
    border: 2,
    borderBottomStyle: 'dotted',
    borderColor: '#7e2967',
    color: '#862d6e',
    paddingTop: 10,
    paddingBottom: 10,
}

const navLink = {
    textDecoration: 'none',
    border: 2,
    borderBottomStyle: 'dotted',
    borderColor: '#7e2967',
    color: '#862d6e',
    paddingLeft: 30,
    paddingBottom: 10,
}

const list = ['Home', 'About', 'Interesting Things', 'Boring Things', 'Contact'];

function Section() {
    return (
        <section style={style}>
            <nav style={navStyle}>
                <div>
                    {/*პირველი ვარიანტი*/}
                    {/* <ul >
                        {
                            list.map((link)=> (<li style={navList}> {link} </li>))
                        }
                    </ul>*/}

                    {/*მეორე ვარიანტი*/}
                    {/*<div >
                        {
                            list.map((link)=> (<p style={navLink}> {link} </p>))
                        }
                    </div>*/}

                    {/*მესამე ვარიანტი*/}

                    <p style={navLink}><a style={{textDecoration: 'none'}} href="">Home</a></p>
                    <p style={navLink}><a style={{textDecoration: 'none'}} href="">About</a></p>
                    <p style={navLink}><a style={{textDecoration: 'none'}} href="">Interesting Things</a></p>
                    <p style={navLink}><a style={{textDecoration: 'none'}} href="">Boring Things</a></p>
                    <p style={navLink}><a style={{textDecoration: 'none'}} href="">Contact</a></p>

                    <p style={{paddingLeft: 30, color: 'rgb(40, 40, 67)'}}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                        elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
            </nav>
            <article style={artStyle}>
                <div>
                    <h1 style={{fontSize: 35}}>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                        voluptas nulla pariatur?
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Section;