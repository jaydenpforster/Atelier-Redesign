import React from 'react'
import NewStyles from './components/newStyles.jsx'
import NewPhotos from './components/newPhotos.jsx'
import NewSize from './components/newSize.jsx'
import NewAmount from './components/newAmount.jsx'
import NewButton from './components/newButton.jsx'
import Modal from './components/modal.jsx'

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      styles: { results: [] },
      // Styles State
      selectedStyle: 0,
      currentStyleInfo: {
        name: 'Forest Green & Black',

        photos: [{
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          thumbnail_url: ['https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'],
        }],
        skus: {
          '941206': {
            quantity: '8',
            size: '-'
          },
          style_id: '162332'
        }
      },
      // sizeAmount State
      chosenSize: '-',
      chosenAmount: '',
      skuID: '',
      availableSizes: [{ size: '-', quantity: '8' }],
      availableAmount: '-',
      // Photos
      mainPhoto: '',
      thumbnails: [{
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
      }],
      showWarning: false,
      showModal: false,
      currentStyle: '',
      thumbnailIndex: '0',
      mainPhotoIndex: '0',

      original_price: '140.00',
      sale_price: '0',

    };
    this.setSelectedStyle = this.setSelectedStyle.bind(this)
    this.setCurrentSku = this.setCurrentSku.bind(this)
    this.setCurrentStyleInfo = this.setCurrentStyleInfo.bind(this)
    this.setChosenSize = this.setChosenSize.bind(this)
    this.setAvailableAmount = this.setAvailableAmount.bind(this)
    this.setChosenAmount = this.setChosenAmount.bind(this)
    this.setMainPhoto = this.setMainPhoto.bind(this)
    this.setThumbnails = this.setThumbnails.bind(this)
    this.setAvailableSizes = this.setAvailableSizes.bind(this)
    this.setSkuID = this.setSkuID.bind(this)
    this.setShowWarning = this.setShowWarning.bind(this)
    this.setShowModal = this.setShowModal.bind(this)
    this.setThumbnailIndex = this.setThumbnailIndex.bind(this)
    this.setOriginalPrice = this.setOriginalPrice.bind(this)
    this.setSalePrice = this.setSalePrice.bind(this)
    this.setMainPhotoIndex = this.setMainPhotoIndex.bind(this)
  }
  setSelectedStyle(selectedStyle) { this.setState({ selectedStyle }) }
  setCurrentSku(currentSku) { this.setState({ currentSku }) }
  setCurrentStyleInfo(currentStyleInfo) { this.setState({ currentStyleInfo }) }
  setSkuID(skuID) { this.setState({ skuID }) }

  setChosenSize(chosenSize) { this.setState({ chosenSize }) }
  setChosenAmount(chosenAmount) { this.setState({ chosenAmount }) }
  setAvailableSizes(availableSizes) { this.setState({ availableSizes }) }
  setAvailableAmount(availableAmount) { this.setState({ availableAmount }) }

  setMainPhoto(mainPhoto) { this.setState({ mainPhoto }) }
  setThumbnails(thumbnails) { this.setState({ thumbnails }) }
  setShowWarning(showWarning) { this.setState({ showWarning }) }

  setShowModal(showModal) { this.setState({ showModal }) }
  setThumbnailIndex(thumbnailIndex) { this.setState({ thumbnailIndex }) }
  setOriginalPrice(original_price) { this.setState({ original_price }) }
  setSalePrice(sale_price) { this.setState({ sale_price }) }
  // Keep this as a reminder on how to log something after changing state.
  setMainPhotoIndex(mainPhotoIndex) { this.setState({ mainPhotoIndex }, () => { console.log('this.state.mainPhotoIndex', this.state.mainPhotoIndex) }) }

  jest() {
    return 'Jest'
  }


  componentDidMount() {
    if (this.props !== undefined) {
      this.setState({
        info: this.props.overview,
        styles: this.props.styles,
        currentStyleInfo: this.props.styles.results[0],
        availableSizes: this.props.styles.results[0].skus,
        mainPhoto: this.props.styles.results[0].photos[0].url,
        thumbnails: this.props.styles.results[0].photos,
      })
    }
  }
  componentDidUpdate() {
    /**
      ON SKU ID CHANGE (Style Click)
      Grab SelectSize
      Change defaultValue Text to "SelectSize"
     */
  }

  render() {
    return (
      <div className="Overview" data-testid="Overview">
        <div>Overview Here!</div>
        {this.props.renderStars()}
        <div className="ProductTitle" >{this.state.info.name}</div>
        <div className="Category">{this.state.info.category}</div>
        {/* <div>OV Price: {this.state.info.default_price}</div>  KEEP THIS ONE HERE*/}
        <div className="Slogan">{this.state.info.slogan}</div>
        <div className="Description">{this.state.info.description}</div>
        <br></br>
        <NewStyles
          showWarning={this.state.showWarning}
          allStyles={this.state.styles.results}
          selectedStyle={this.state.selectedStyle}
          setSelectedStyle={this.setSelectedStyle}
          currentStyleInfo={this.state.currentStyleInfo}
          setCurrentStyleInfo={this.setCurrentStyleInfo}
          setChosenSize={this.setChosenSize}
          setMainPhoto={this.setMainPhoto}
          setThumbnails={this.setThumbnails}
          setAvailableSizes={this.setAvailableSizes}
          setAvailableAmount={this.setAvailableAmount}
          setSkuID={this.setSkuID}
          setChosenAmount={this.setChosenAmount}

          original_price={this.state.original_price}
          sale_price={this.state.sale_price}
          setOriginalPrice={this.setOriginalPrice}
          setSalePrice={this.setSalePrice}

          setMainPhotoIndex={this.setMainPhotoIndex}
          mainPhotoIndex={this.state.mainPhotoIndex}
        />
        <br></br>
        <Modal
          showModal={this.state.showModal}
          setShowModal={this.setShowModal}
          currentStyleInfo={this.state.currentStyleInfo}
          thumbnails={this.state.thumbnails}
          thumbnailIndex={this.state.thumbnailIndex}
          mainPhotoIndex={this.state.mainPhotoIndex}
          setThumbnailIndex={this.setThumbnailIndex}
          setMainPhotoIndex={this.setMainPhotoIndex}
        />
        <br></br>
        <NewPhotos
          currentStyleInfo={this.state.currentStyleInfo}
          mainPhoto={this.state.mainPhoto}
          setMainPhoto={this.setMainPhoto}
          thumbnails={this.state.thumbnails}
          setThumbnails={this.setThumbnails}
          showModal={this.state.showModal}
          setShowModal={this.setShowModal}
          thumbnailIndex={this.state.thumbnailIndex}
          setThumbnailIndex={this.setThumbnailIndex}
          setMainPhotoIndex={this.setMainPhotoIndex}
          mainPhotoIndex={this.state.mainPhotoIndex}
        />
        <br></br>
        <NewSize
          chosenSize={this.state.chosenSize}
          chosenAmount={this.state.chosenAmount}
          availableSizes={this.state.availableSizes}
          setChosenSize={this.setChosenSize}
          setAvailableAmount={this.setAvailableAmount}
          setSkuID={this.setSkuID}
          setChosenAmount={this.setChosenAmount}
        />
        <br></br>
        <NewAmount
          chosenSize={this.state.chosenSize}
          availableAmount={this.state.availableAmount}
          setChosenAmount={this.setChosenAmount}
          chosenAmount={this.state.chosenAmount}
        />
        <br></br>
        <NewButton
          chosenSize={this.state.chosenSize}
          chosenAmount={this.state.chosenAmount}
          skuID={this.state.skuID}
          showWarning={this.state.showWarning}
          availableAmount={this.state.availableAmount}
        />
      </div>
    );
  }
}
export default Overview;
