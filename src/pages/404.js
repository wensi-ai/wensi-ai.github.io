import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  backgroundImage: "url('/404.png')",
  backgroundSize: "100% 100%",
  display: "block",
  height: "100vh",
  width: "100%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: "10vh",
  marginLeft: "10vw",
  fontSize: "3vmax",
}

const paragraphStyles = {
  marginTop: "10vh",
  marginLeft: "10vw",
  fontSize: "1.5vmax",
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Oops</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        This page doesn't exist.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
