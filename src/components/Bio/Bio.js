import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from './Bio.module.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className={classes.bio}>
      <div className={classes.bioavatar}>
      <StaticImage
        imgStyle={{ borderRadius: "50%", Height: "70px", Width: "70px" }}
        layout="fixed"
        src="../../images/GlennMurray.jpg"
        quality={95}
        width={70}
        height={70}
        alt="Glenn Murray"
      />
   </div>
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          <a href={`${social?.linkedin || ``}`}>CV</a>
          <p>{` Here's my latest `}
          <Link to="/blog/life-during-lockdown">
            think piece.
          </Link>
          </p>
            </p>
      )}
    </div>
  )
}



export default Bio
