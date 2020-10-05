import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsaappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';


function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/59809579?s=460&u=1c96cff34ecc10b16aef63b1f0ccd706b53c1106&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marcelo Corrêa</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Sou formado em Análise e desenvolvimentode sistema pelo IFSP Campus Guarulhos, três anos de experiência em desenvolvimento de sistemas web em ASP.Net, VB.Net e SQL Server, além de alguns projetos com C#, inclusive meu TCC, um jogo de RPG tactics. Gosto de Back-end mas me viro bem no front-end.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
            
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsaappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;