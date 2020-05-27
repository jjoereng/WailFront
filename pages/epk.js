// epk.js
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import BlockContent from '@sanity/block-content-to-react'
import Logo from '../components/Logo';

import styles from './epk.module.scss';
import imageUrlBuilder from '@sanity/image-url';

const EPK = (props) => {
  const {
    title = 'Missing title',
    body = [],
    pressphotos = [],
    bios = [],
    upcomingReleases = []

  } = props;

  return (
    <div>
      <div id={styles.epk} class="page">
        <div class="container-horizontal">
          <h1 id={styles.epkTitle} class="center-text">{title}</h1>
        </div>
        <div className={styles.wrapper}>
          <div id={styles.mainText}>
            <BlockContent blocks={body}/>
            <div>
          {bios && 
            <div id={styles.downloads}>
              <h2>Bio</h2>
              {bios.map(bio => 
              <div> 
                {bio.originalFilename}
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
                <img class="item responsive" src={urlFor(pressphoto).width(400).url()}/>
              </a>
              </div>
              )}
            </div> 
          }
        </div>
        
          {upcomingReleases && 
          <div>

            <h2>Upcoming releases</h2>
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
       <div className={styles.logos}>
        <Logo color={'white'}></Logo>
        <Logo color={'red'}></Logo>
        <Logo color={'black'}></Logo>
      </div>
      </div>
      <img class="responsive" src="/images/epkbotimg.jpg" />
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
  upcomingReleases
}`;

EPK.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, {slug});
}

export default EPK;