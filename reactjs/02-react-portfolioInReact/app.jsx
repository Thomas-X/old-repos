var DataBlock = React.createClass({



});

function MainContent() {
    return (

        <section className="main-content">
            <h1 id="header-1header-1"><a href="#header-1"/>Portfolio</h1>
            <p>This is a series of links to a live site or to a repo if it's i.e an android app, some things
                might be unfinished. Also some things I made in the beginning are in Dutch, I have changed to
                English since
                then. (mostly)</p>
            <p id="hidden"/>
            <a id="hidden"/>

            <br/>
            <button className="button">Expand all</button>
        </section>
    );
}

function Header() {
    return (
        <section className="page-header">
            <h1 className="project-name">My Portfolio</h1>
            <h2 className="project-tagline">This is my portfolio, this will be updated from time to time.</h2>
            <a className="btn" href="https://github.com/Thomas-X/" class="btn">View me on GitHub</a>



        </section>
    );
}

var Application = React.createClass({

    render: function () {
        return (
            <div>
                <Header/>
                <MainContent/>
            </div>
        )
    }
});

ReactDOM.render(<DataBlock url="https://pastebin.com/raw/fczsLttB"/>, document.getElementById("container"));