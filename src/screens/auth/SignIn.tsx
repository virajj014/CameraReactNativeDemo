import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg';
import { BackgroundLightTheme, KoivisionLogoLightTheme } from '../../assets/images';

let { width, height } = Dimensions.get('window');

const SignIn = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={styles.signupBanner}>
                <BackgroundLightTheme width={'100%'} height={'100%'}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
                <KoivisionLogoLightTheme width={190} height={90}
                    style={{
                        backgroundColor: 'white',
                    }}
                />
                <Text
                    style={{
                        color: 'grey',
                        fontSize: 26,
                        backgroundColor: 'white',
                        marginTop: 20,
                    }}
                >Login To Continue</Text>

            </View>

            <View style={styles.signupForm}>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder={'Enter your email'}
                        placeholderTextColor={'grey'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)}

                    // change border color of TextInput on focus
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder={'Enter your password'}
                        placeholderTextColor={'grey'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    // change border color of TextInput on focus
                    />
                </View>


                <Text 
                style={styles.submitButton}                         
                >
                    L O G I N
                </Text>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    signupBanner: {
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height / 3,
    },
    signupForm: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: width,
        padding: 20,
    },
    formContainer: {
        width: '100%',
        paddingVertical: 20,
    },
    formLabel: {
        fontSize: 14,
        color: 'grey',
    },
    formInput: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 0,
        fontSize: 14,
        marginTop: 5,
    },
    submitButton: {
        width: '100%',
        paddingVertical: 15,
        borderColor: '#008EE5',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        color: 'grey'
    }
})