import React, { Component } from 'react'
import classes from './Blog.module.scss'

class Blog extends Component {
  render() {
    return (
      <section className={classes.Blog}>
        <h2>Блог: можно посты из других соц сетей</h2>
      </section>
    )
  }
}

export default Blog
