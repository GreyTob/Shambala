import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { teachers } from '../Teachers/teachersState'
import Button from '../UI/Button/Button'
import { NavHashLink } from 'react-router-hash-link'

import classes from './Gallery.module.scss'

const TeacherGallery = ({ match }) => {
  const teacherPhoto = teachers.filter(
    (teacher) => teacher.name === match.params.name
  )

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <h3 className={classes.Gallery}>
        Фотогалерея:&nbsp; {teacherPhoto[0].name}
      </h3>
      <Gallery photos={teacherPhoto[0].photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={teacherPhoto[0].photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>

      <NavHashLink smooth to="/#teachers">
        <Button value="Закрыть галерею" />
      </NavHashLink>
    </>
  )
}

export default TeacherGallery
