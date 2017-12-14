import {StyleSheet} from 'react-native';

let colors = {
    mainColour: '#ff0008'
}

const styles = StyleSheet.create({
    centerItems: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    imageContainer: {
        height: 145,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 18,
        paddingLeft: 10,
        color: '#FFFFFF',
        backgroundColor: 'rgba(33, 33, 33, 0.6)'
    },
    //TODO add nightmode via passing these colours through a variable
    description: {
        fontSize: 13,
        paddingLeft: 10,
        color: '#212121',
    },
    author: {
        fontSize: 11,
        color: '#686868',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
    }
});

export function getColors() {
    return colors;
}
export function getStyle() {
    return styles;
}