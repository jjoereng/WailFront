// index.js
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import { propTypes } from '@sanity/block-content-to-react';
import Logo from '../components/Logo';
import styles from './index.module.scss';
import SoMeIcon from '../components/SoMeIcon';

const Index = (props) => {
    const {posts = [] } = props;

    return (
        <div id={styles.index}>
          <div id={styles.header} class="item">
          </div>
          <div class={styles.promoContainer}>
            <img class={styles.squareBackground} src={'/images/prerelease.png'}></img>
            <a href="https://orcd.co/kboey28"><button class={styles.presaveButton} id="presave">Presave now</button></a>
           
          </div>
          <div id="footer" class="">
            <div class={styles.someLinks}>
              <SoMeIcon link="https://www.facebook.com/WAIL.official.NO/" logo="facebook"></SoMeIcon>
              <SoMeIcon link="https://open.spotify.com/artist/0pmwXDz7lf1P744YmhBfOX" logo="spotify"></SoMeIcon>
              <SoMeIcon link="https://wailofficial.bandcamp.com/track/endless-repetition" logo="bandcamp"></SoMeIcon>
              <SoMeIcon link="https://www.deezer.com/en/album/145044712" logo="deezer"></SoMeIcon>
              <SoMeIcon link="https://www.youtube.com/channel/UCjLB9u-kec86ptpH-WFwbeg" logo="youtube"></SoMeIcon>
              <SoMeIcon link="https://www.instagram.com/wail_band" logo="instagram"></SoMeIcon>
            </div>
          </div>
        </div>

    )
}

import { useRouter } from 'next/router'

export default Index;
