var PLAYFIELD = [];

for (var o = 0; o < 36; o++) {
    PLAYFIELD[o] = {key: o, value: "□"};
    // console.log(PLAYFIELD);
}


function RowItem() {

    return (
        <td onClick={this.onChange(-1)}></td>
    )
}


RowItem.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    key: React.PropTypes.number.isRequired,
}

function TopRow() {

    return (
        <table>
            <tbody>
            <tr>
                <TopRowItem id={1}/>
                <TopRowItem id={2}/>
                <TopRowItem id={3}/>
                <TopRowItem id={4}/>
                <TopRowItem id={5}/>
                <TopRowItem id={6}/>
            </tr>
            </tbody>
        </table>
    )
}

function TopRowItem(props) {
    return (
        <td>
            <div className="TopRowItem"></div>
            <br/></td>
    )
}

TopRowItem.propTypes = {
    id: React.PropTypes.number.isRequired,
}

var Application = React.createClass({

    propTypes: {
        rowitems: React.PropTypes.arrayOf(React.PropTypes.shape({
            key: React.PropTypes.number.isRequired,
            value: React.PropTypes.string.isRequired,
        })).isRequired,
    },

    getInitialState: function () {
        return {
            //get initial state stuff here, i.e title

        }
    },


    onClickItem: function (index) {

        this.state.rowitems[index].value = "I changed";

        this.setState(this.state);
    },


    render: function () {
        return (

            <div className="Maincontainer">
                <TopRow/>

                <table border="0">

                    <tbody>
                    <tr>

                        {console.log(this.state)}
                        <RowItem />

                    </tr>
                    </tbody>

                </table>
            </div>
        )
    },
});


ReactDOM.render( <Application rowitems={PLAYFIELD}/>, document.getElementById('container'));