import { StyleSheet, Image, Text, View } from 'react-native';

const TourPage4 = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/companylogo.png')} style={styles.companylogo} />
            <Image source={require('../assets/04TourImage.png')} style={styles.img1} />
            <Text style={styles.txt1}>Thank You!</Text>
            <Text style={styles.txt2}>Ready to
                <Text style={{ color: '#8D5A25' }}> Explore</Text>
            </Text>
            <Text style={styles.txt5}>Best of Luck for your Revords journey.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#d9e7ed',
        alignItems: 'center'
    },
    companylogo: {
        flexShrink: 0,
        width: '55%',
        resizeMode: 'contain',
        marginTop: '-10%'
    },
    img1: {
        flexShrink: 0,
        width: 225,
        height: 225,
        borderRadius: 500,
        marginTop: '-10%'
    },
    txt1: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: '10%',
        color: '#140D05'
    },
    txt2: {
        fontSize: 24,
        fontWeight: '900',
        marginTop: '5%',
        color: '#140D05'
    },
    txt3: {
        fontSize: 24,
        fontWeight: '700',
        color: '#140D05'
    },
    txt4: {
        fontSize: 24,
        fontWeight: '900',
        color: '#140D05'
    },
    txt5: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: '5%',
        color: '#8c9194',
        textAlign: 'center',
        paddingHorizontal: 40
    }
});

export default TourPage4;