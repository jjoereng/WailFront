// index.js
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import { propTypes } from '@sanity/block-content-to-react';
import Logo from '../components/Logo';
import styles from './index.module.scss';
import SoMeIcon from '../components/SoMeIcon';
import SoMeContainer from '../components/SoMeContainer';

const Index = (props) => {
    const {posts = [] } = props;

    return (
        <div id={styles.index}>
          <div id={styles.header} class="item">
          </div>
          <div class={styles.promoContainer}>
            <img class={styles.squareBackground} src={'/images/civmax.png'}></img>
            <a href="https://open.spotify.com/artist/0pmwXDz7lf1P744YmhBfOX"><button class={styles.presaveButton} id="presave">Listen now</button></a>
           
          </div>
          <div id="footer">
            <SoMeContainer>
              <SoMeIcon link="https://www.facebook.com/WAIL.official.NO/" logo="facebook"></SoMeIcon>
              <SoMeIcon link="https://open.spotify.com/artist/0pmwXDz7lf1P744YmhBfOX" logo="spotify"></SoMeIcon>
              <SoMeIcon link="https://wailofficial.bandcamp.com/" logo="bandcamp"></SoMeIcon>
              <SoMeIcon link="https://deezer.page.link/3GXpCGqGkxu93TP38" logo="deezer"></SoMeIcon>
              <SoMeIcon link="https://www.youtube.com/channel/UCjLB9u-kec86ptpH-WFwbeg" logo="youtube"></SoMeIcon>
              <SoMeIcon link="https://www.instagram.com/wail_band" logo="instagram"></SoMeIcon>
            </SoMeContainer>
          </div>
        </div>
    )
}

import { useRouter } from 'next/router'

export default Index;
