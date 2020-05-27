// index.js
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import { propTypes } from '@sanity/block-content-to-react';
import Logo from '../components/Logo';
import styles from './index.module.scss';

const Index = (props) => {
    const {posts = [] } = props;

    return (
        <div id={styles.index} class="container-vertical">
          <div id="header" class="item">
            
          </div>
          <div id="content" class="item">
            <p id={styles.soon}>soon</p>
          </div>
          <div id="footer" class="item center-text">
            <Logo color={'white'}></Logo>
          </div>
        </div>
    )
}

import { useRouter } from 'next/router'

export default Index;
