import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  var aboutContent = null
  var contactContent = null
  useEffect(() => {
    aboutContent = document.querySelector('#about-content')
    contactContent = document.querySelector('#contact-content')
  }, [])
  return (
    <div>
      <Head>
        <title>mertakpinar</title>
        <meta name='description' content='Portfolio website' />
        <script type='text/javascript' src='js/winbox.bundle.js'></script>
      </Head>
      <div className='container'>
        <nav>
          <ul>
            <li
              onClick={() => {
                new WinBox({
                  title: 'ABOUT ME',
                  width: '50%',
                  height: '50%',
                  x: 'center',
                  y: 'center',
                  onfocus: function () {
                    this.setBackground('#ff007f')
                  },
                  onblur: function () {
                    this.setBackground('#999')
                  },
                  mount: aboutContent,
                })
              }}
            >
              /about
            </li>
            <li
              onClick={() => {
                new WinBox({
                  title: 'CONTACT ME',
                  width: '50%',
                  height: '50%',
                  x: 'center',
                  y: 'center',
                  onfocus: function () {
                    this.setBackground('#ff007f')
                  },
                  onblur: function () {
                    this.setBackground('#999')
                  },
                  mount: contactContent,
                })
              }}
            >
              /contact
            </li>
            <li>
              <Link href='/blog'>/blog</Link>
            </li>
            <li>
              <Link href='/projects'>/projects</Link>
            </li>
          </ul>
        </nav>

        <main>
          <h1>
            mertakpinar:$<span className='cursor'>|</span>
          </h1>
          <ul>
            <li>
              <a
                href='https://www.youtube.com/channel/UC7lxUNscyoyAbfVy7snosKQ'
                target='_blank'
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href='https://www.udemy.com/user/mert-akpinar-11/'
                target='_blank'
              >
                Udemy
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/mert-akp%C4%B1nar-995187202/'
                target='_blank'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/mertakpinar_/' target='_blank'>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://github.com/mertakpinar29' target='_blank'>
                Github
              </a>
            </li>
          </ul>
        </main>
      </div>
      <div className='hidden'>
        <div id='about-content'>
          <h2>
            about-me:$<span className='cursor'>|</span>
          </h2>
          <p>Selam,ben Mert ve 1 yıldır yazılımla uğraşıyorum.</p>
          <p>
            Java,C#,Javascript dilleri ve modern frameworkler ile programlama
            yapabiliyorum. Aynı zamanda YouTube ve Udemy platformlarında web
            geliştirme üzerine eğitim videoları hazırlıyorum.
          </p>
        </div>

        <div id='contact-content'>
          <h2>
            contact-me:$<span className='cursor'></span>
          </h2>
          <p>
            Aşağıdaki mail adresinden veya sosyal medya hesaplarımdan bana
            ulaşabilirsiniz
          </p>
          <ul>
            <li>Email: akpnrm29@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
