// epk.js
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import BlockContent from '@sanity/block-content-to-react'
import Logo from '../components/Logo';
import styles from './epk.module.scss';
import imageUrlBuilder from '@sanity/image-url';
import SoMeIcon from '../components/SoMeIcon';
import SoMeContainer from '../components/SoMeContainer';

const EPK = (props) => {
  const {
    title = 'Missing title',
    body = [],
    pressphotos = [],
    bios = [],
    upcomingReleases = [],
    importantLinks = [],
    otherLinks = [],
    announcement = ""

  } = props;

  return (
    <div>
      <div id={styles.epk} class="page">
        <div class="container-horizontal">
          <h1 id={styles.epkTitle} class="center-text">{title}</h1>
        </div>
        {announcement &&
           <div>
            <BlockContent blocks={announcement}/>
           </div>
        }
        <div className={styles.wrapper}>
          <div id={styles.mainText}>
            <BlockContent blocks={body}/>
            <div>
          {bios && 
            <div id={styles.downloads}>
              <h2>Bio</h2>
              {bios.map(bio => 
              <div> 
                <a href={bio.url}>{bio.originalFilename}</a>
              </div>
              )}
             </div> 
          }
             </div>
          </div>
          {pressphotos && 
            <div id={styles.pressPhotos}>
              <h2>Press photos</h2>
              {pressphotos.map(pressphoto => 
              <div className={styles.pressPhoto}>
              <a href={urlFor(pressphoto).url()}>
                <img class="responsive" src={urlFor(pressphoto).width(400).url()}/>
              </a>
              </div>
              )}
            </div> 
          }
        </div>
          {upcomingReleases && 
          <div>
            <h2>Current release cycle</h2>
            <div id={styles.upcoming}>
              {upcomingReleases.map(upcoming => 
              <div className={styles.upcomingItem}>
                  <div>{upcoming.releaseName}</div>
                  <div>Release date: <span className={styles.releaseDate}>{upcoming.releaseDate}</span></div>
                  <a href={upcoming.releaseURL} className={styles.upcomingImage}>
                    <img  class="responsive" src={urlFor(upcoming.releaseImage).width(500).url()}/>
                  </a>
              </div>
              )}
          </div> 
          </div>
          }
          {otherLinks &&
            <div id={styles.otherLinks}>
                {otherLinks.map(link =>
                <div>
                  <a href={link.url}>{link.title}</a>
                </div>
                )}
            </div>
          }
       <h2>Official logos</h2>
       <div className={styles.logos}>
         
        <Logo color={'white'}></Logo>
        <Logo color={'red'}></Logo>
        <Logo color={'black'}></Logo>
      </div>
      {importantLinks && 
          <div>
            <h2>Important links</h2>
            <div id={styles.upcoming}>
              {importantLinks.map(link => 
              <div className={styles.upcomingItem}>
                  <a href={link.url}>{link.title}</a>
              </div>
              )}
          </div> 
          </div>
          }
      <SoMeContainer>
              <SoMeIcon link="https://www.facebook.com/WAIL.official.NO/" logo="facebook"></SoMeIcon>
              <SoMeIcon link="https://open.spotify.com/artist/0pmwXDz7lf1P744YmhBfOX" logo="spotify"></SoMeIcon>
              <SoMeIcon link="https://wailofficial.bandcamp.com/" logo="bandcamp"></SoMeIcon>
              <SoMeIcon link="https://deezer.page.link/3GXpCGqGkxu93TP38" logo="deezer"></SoMeIcon>
              <SoMeIcon link="https://www.youtube.com/channel/UCjLB9u-kec86ptpH-WFwbeg" logo="youtube"></SoMeIcon>
              <SoMeIcon link="https://www.instagram.com/wail_band" logo="instagram"></SoMeIcon>
            </SoMeContainer>
      </div>
      <img class="responsive" src="/images/epkbotimg.png" />
    </div>
  );
}

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const query = groq`*[title == "EPK"][0]{
  title,
  body,
  pressphotos,
  "bios": bios[].asset->{url, originalFilename},
  upcomingReleases,
  announcement,
  importantLinks,
  otherLinks
}`;

EPK.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, {slug});
}

export default EPK;