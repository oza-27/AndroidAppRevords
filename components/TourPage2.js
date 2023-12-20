import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';

const TourPage2 = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/companylogo.png')} style={styles.companylogo} />
            <Image source={require('../assets/02TourImage.png')} style={styles.img1} />
            <Text style={styles.txt1}>Revords!!!</Text>
            <Text style={styles.txt2}>What is
                <Text style={{ color: '#8D5A25' }}> Revords?</Text>
            </Text>

            <Text style={styles.txt4}>How it works.</Text>
            <Text style={styles.txt5}>Revords App is an connection between customer and business owners,
                where customer can earn rewards from business owners for their loyalty.</Text>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9e7ed',
        alignItems: 'center',
        
        paddingHorizontal: width * 0.05, // Adjust based on your design
    },
    companylogo: {
        width: '55%',
        aspectRatio: 1, // Maintain aspect ratio
        resizeMode: 'contain',
        
    },
    img1: {
        width: width * 0.4, // 80% of screen width
        height: width * 0.4, // Maintain aspect ratio
        borderRadius: width * 0.4, // Half of the width for circular shape
        
    },
    txt1: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: height * 0.02, // Adjust based on your design
        color: '#140D05',
    },
    txt2: {
        fontSize: 24,
        fontWeight: '900',
        marginTop: height * 0.01, // Adjust based on your design
        color: '#140D05',
    },
    txt4: {
        fontSize: 24,
        fontWeight: '900',
        color: '#140D05',
    },
    txt5: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: height * 0.01, // Adjust based on your design
        color: '#8C9194',
        textAlign: 'center',
    },
});

export default TourPage2;