import React, { Component } from 'react'
import Lightbox from 'react-images'
import { css, StyleSheet } from 'aphrodite/no-important'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lightboxIsOpen: false,
       currentImage: 0
    }
  }

  /**
   * Opens lightbox at index of image clicked.
   * 
   * @param {Number} index - index of image
   * @param {Event} event - event object
   */
  openLightbox = (index, event) => {
    event.preventDefault()
    this.setState({
      lightboxIsOpen: true,
      currentImage: index
    })
  }

  /**
   * Closes lightbox.
   */
  closeLightbox = () => {
    this.setState({ 
      lightboxIsOpen: false,
      currentImage: 0
    })
  }

  /**
   * Goes to the previous image.
   */
  gotoPrev = () => this.setState(prevState => {
    return { currentImage: prevState.currentImage - 1 }
  })

  /**
   * Goes to the next image.
   */
  gotoNext = () => this.setState(prevState => {
    return { currentImage: prevState.currentImage + 1 }
  })

  /**
   * Goes to the image at index.
   * 
   * @param {Number} index - the index of the image
   */
  gotoImage = index => this.setState({ currentImage: index })

  /**
   * If it's not the last image, calls gotoNext().
   */
  handleImageClick = () => {
    if (this.state.currentImage === this.props.images.length - 1) return
    this.gotoNext()
  }

  /**
   * Renders thumbnail versions of the images.
   */
  renderGallery = () => {
    const { images } = this.props
    if (!images) return
    const gallery = images.map((obj, i) => {
			return (
				<a
          className={css(classes.thumbnail, classes[obj.orientation])}
					href={obj.src}
					key={i}
					onClick={(e) => this.openLightbox(i, e)}
				>
          <img
            src={obj.thumbnail}
            width="250"
            alt=""/>
				</a>
			)
		})

		return (
			<div className={css(classes.gallery)}>
				{ gallery }
			</div>
		);
  }

  render() {
    const {
      images
    } = this.props
    const {
      lightboxIsOpen,
      currentImage
    } = this.state
    return (
      <div className="Gallery">
        { this.renderGallery() }
        <Lightbox
          images={ images }
          currentImage={ currentImage }
          isOpen={ lightboxIsOpen }
          onClickImage={ this.handleImageClick }
          onClickNext={ this.gotoNext }
          onClickPrev={ this.gotoPrev }
          onClickThumbnail={ this.gotoImage }
          onClose={ this.closeLightbox }
        />
      </div>
    )
  }
}

const gutter = {
	small: 2,
	large: 4,
};
const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},
	},
});