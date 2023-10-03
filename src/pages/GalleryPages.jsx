import React from 'react'
import images from '../assets/images/gallery/images'
import '../assets/css/gallery.css'


const GalleryPages = () => {
  return (
    <div className="container">
        <div className="breadcrumb-box">
                <div className="breadcrumb-inner">
                    <div className="left">
                        <a
                            className="home"
                            href="#"
                        >
                            Home
                        </a>
                        <span className="navigation-pipe" />
                        Gallery
                    </div>
                </div>
            </div>
      <div className='gallery-wrapper'>
        <h2 className='text-center' >OUR GALLERY</h2>

        <div className="row">


          <div className="col-lg-4">
            <div className='card '>
              <img className='img-thumbnail' src={images.img47} alt="Image 47" />

            </div>
          </div>

          <div className="col-lg-4">
            <div className='card'>
              <img className='img-thumbnail' src={images.img48} alt="Image 47" />

            </div>
          </div>
          <div className="col-lg-4">
            <div className='card'>
              <img className='img-thumbnail' src={images.img49} alt="Image 47" />

            </div>
          </div>
          <div className="col-lg-4">
            <div className='card'>
              <img className='img-thumbnail' src={images.img50} alt="Image 47" />

            </div>
          </div>
          <div className="col-lg-4">
            <div className='card'>
              <img className='img-thumbnail' src={images.img51} alt="Image 47" />

            </div>
          </div>
          <div className="col-lg-4">
            <div className='card'>
              <img className='img-thumbnail' src={images.img52} alt="Image 47" />

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default GalleryPages
