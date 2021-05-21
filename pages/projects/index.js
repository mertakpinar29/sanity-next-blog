import React, { useState } from 'react'
import sanityClient from '../../sanity'
import Link from 'next/link'
import Head from 'next/head'
import getVideoId from 'get-video-id'
import YouTube from 'react-youtube'
import SanityBlockContent from '@sanity/block-content-to-react'

const Project = ({ projects }) => {
  return (
    <main className='blog-main'>
      <Head>
        <title>mertakpinar</title>
        <meta name='description' content='Portfolio website' />
        <script type='text/javascript' src='js/winbox.bundle.js'></script>
      </Head>
      <section className='post-section'>
        <h1>
          <Link href='/'>mertakpinar</Link>
          <span className='cursor'>|</span>projects
        </h1>
        <h3>Recent projects</h3>
        <div className='posts'>
          {projects &&
            projects.map((project) => (
              <article key={project.title}>
                <a href={project.link} target='_blank'>
                  <span style={{ cursor: 'pointer' }} className='post-body'>
                    <p>{project.description}</p>
                    <span className='post-info'>
                      <h3 className='post-category'>
                        {project.projectType ? project.projectType : 'Personal'}
                      </h3>
                      <h3 className='post-title'>{project.title}</h3>
                    </span>
                  </span>
                </a>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "project"] | order(_createdAt desc) {
       title,
       description,
       projectType,
       link
    }`

  const projects = await sanityClient.fetch(query)

  if (!projects.length) {
    return {
      props: {
        projects: [],
      },
    }
  } else {
    return {
      props: {
        projects,
      },
    }
  }
}

export default Project
