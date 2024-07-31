import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';

import { readFile } from 'react-native-fs';

import RNFS from 'react-native-fs';

const Web = () => {
    const [htmlContent, setHtmlContent] = useState(null);

    useEffect(() => {
        const loadHtml = async () => {
            try {
                // const initialHtml = '<html><body><h1>Hello, Krishna!</h1></body></html>';
                // await AsyncStorage.setItem('index.html', initialHtml);

                // const html = await AsyncStorage.getItem('index.html');
                // console.log('Retrieved HTML:', html);
                // setHtmlContent(html);


                const path = RNFS.DocumentDirectoryPath + '/Operators.html';
                
               
                const fileExists = await RNFS.exists(path);
                if (!fileExists) {
                    throw new Error('Operators.html not found');
                }

               
                const html = await RNFS.readFile(path, 'utf8');
                console.log('Retrieved HTML:', html);
                setHtmlContent(html);
                
            } catch (error) {
                console.error('Error loading HTML file:', error);
            }
        };

        loadHtml();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {htmlContent ? (
                <WebView
                    originWhitelist={['*']}
                    source={{ html: htmlContent }}
                    style={styles.webview}
                />
            ) : <Text>Operators.html not found</Text>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});

export default Web;
