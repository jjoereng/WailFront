// index.js
import styles from './index.module.scss';
import SoMeIcon from '../components/SoMeIcon';
import SoMeContainer from '../components/SoMeContainer';
import Head from 'next/head';

const Index = (props) => {
    const {posts = [] } = props;

    return (
        <div id={styles.index}>
          <Head>
            <title>Wail - Norwegian heavy metal band website</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
          </Head>
          <div id={styles.header} class="item">
          </div>
          <div class={styles.promoContainer}>
            <img class={styles.squareBackground} src={'/images/civmax.png'}></img>
            <a href="https://hypeddit.com/link/4fczh4"><button class={styles.presaveButton} id="presave">Listen now</button></a>
           
          </div>
          <div id="footer">
            <SoMeContainer>
              <SoMeIcon link="https://www.facebook.com/WAIL.official.NO/" logo="facebook"></SoMeIcon>
              <SoMeIcon link="https://open.spotify.com/artist/0pmwXDz7lf1P744YmhBfOX" logo="spotify"></SoMeIcon>
              <SoMeIcon link="https://wailofficial.bandcamp.com/" logo="bandcamp"></SoMeIcon>
              <SoMeIcon link="https://deezer.page.link/3GXpCGqGkxu93TP38" logo="deezer"></SoMeIcon>
              <SoMeIcon link="https://www.youtube.com/watch?v=m9jOR_hVx94&list=OLAK5uy_m-efanrkgcU3T2WdmZgZ5iuECFIahjPK8" logo="youtube"></SoMeIcon>
              <SoMeIcon link="https://www.instagram.com/wail_band" logo="instagram"></SoMeIcon>
            </SoMeContainer>
          </div>
        </div>
    )
}

import { useRouter } from 'next/router'

export default Index;
