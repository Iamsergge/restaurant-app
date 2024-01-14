import { StyleSheet } from "react-native";


export const restaurantStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rCard: {
        width: '85%',
        marginBottom: 10,
        marginRight: 8,
    },
    cardWrapper: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    dishPic: {
        width: '100%',
        height: 150,
        resizemode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }, 
    textArea: {
        padding: 3,
        marginVertical: 1,
        marginLeft: 3,
    }, 
    brand: {
        fontWeight: '700',
    } ,
    price: {
        marginRight: 6,
        color: '#000',
        fontWeight: '700',
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    genre: {
        color: '#f07e4e',
        fontSize: 12,

    
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    leftText: {
        fontSize: 9,
        marginBottom: 4,
        color: '#808080',

    }



});