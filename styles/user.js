import { StyleSheet } from "react-native";


export const userStyles = StyleSheet.create({
    topWrapper: {
        backgroundColor: '#f07e4e',
        width: '100vw',
    },
    top: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    rightSide: {
        flex: 1,
        margin: 5,

    },
    text1: {
        color: '#fff',
        fontSize: 13,
    },
    text2: {
        color: '#000',
        fontSize: 16,
        fontWeight: 500,
    },
    down: {
        color: '#fff',
        fontSize: 16,
    },
    user: {
        color: '#fff',
        fontSize: 19,
        paddingRight: 10,
    },
    inputSection: {
        marginHorizontal: 10,
        marginTop: 8,
    },
    inputBox: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
});