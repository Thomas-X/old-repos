function PlayField(props) {

}

PlayField.propTypes = {
    onChange: React.PropTypes.func.isRequired,
}


var Application = React.createClass({

    propTypes: {},


    render: function () {
        return (
            <div id="mainContainer">

                <h1>Boter, Kaas & Eieren</h1>
                <div id="speelveld">
                    <table border="0">
                        <tr>
                            <PlayField/>
                            <PlayField/>
                            <PlayField/>
                        </tr>
                        <tr>
                            <PlayField/>
                            <PlayField/>
                            <PlayField/>
                        </tr>
                        <tr>
                            <PlayField/>
                            <PlayField/>
                            <PlayField/>
                        </tr>
                    </table>
                </div>
                <div id="game-info">
                    <h1>Aan beurt</h1>

                    <table class="players-turn" border="0">
                        <tr>
                            <td><img width="25" height="25" alt="" title="" src="img/cross.jpg" /></td>
                            <td>Speler</td>
                            <td>1</td>
                        </tr>
                    </table> <!-- EINDE SPELER AAN ZET TABEL -->

                    <h1>Scores</h1>

                    <table class="rounds-info">
                        <tr>
                            <td><img width="15" height="15" alt="" title="" src="img/cross.jpg" />&nbsp;Speler 1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td><img width="15" height="15" alt="" title="" src="img/circle.jpg" />&nbsp;Speler 2</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Aantal rondes</td>
                            <td>0</td>
                        </tr>
                    </table> <!-- EINDE INFO TABEL -->

                    <button class="game-button">Start spel</button>

                </div> <!-- EINDE GAME-INFO CONTAINER -->
            </div>
        )
    },
});


ReactDOM.render(
    <Application/>
    , document.getElementById('container'));