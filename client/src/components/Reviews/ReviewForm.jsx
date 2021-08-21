import React from 'react';
import FormStars from './FormStars.jsx';
import FormCharacteristic from './FormCharacteristic.jsx';
import $ from 'jquery';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      meaning: '',
      rec: 'Yes',
      recBool: true,
      Size: {
        id: 0,
        rating: 0,
      },
      Width: {
        id: 0,
        rating: 0,
      },
      Comfort: {
        id: 0,
        rating: 0
      },
      Quality: {
        id: 0,
        rating: 0
      },
      Length: {
        id: 0,
        rating: 0
      },
      Fit: {
        id: 0,
        rating: 0
      },
      SizeSelection: 'none selected',
      WidthSelection: 'none selected',
      ComfortSelection: 'none selected',
      QualitySelection: 'none selected',
      LengthSelection: 'none selected',
      FitSelection: 'none selected',
      summary: '',
      body: '',
      charsLeft: 50,
      photos: [],
      nickname: '',
      email: '',
      submitChars: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCharInputChange = this.handleCharInputChange.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateCharTotal = this.calculateCharTotal.bind(this);
  }

  componentDidMount() {
    if (this.props.characteristics['Size'] !== undefined) {
      this.setState(prevState => ({
        ['Size']: {
          ...prevState['Size'],
          id: this.props.characteristics['Size'].id
        }
      }))
    };
    if (this.props.characteristics['Width'] !== undefined) {
      this.setState(prevState => ({
        ['Width']: {
          ...prevState['Width'],
          id: this.props.characteristics['Width'].id
        }
      }))
    };
    if (this.props.characteristics['Comfort'] !== undefined) {
      this.setState(prevState => ({
        ['Comfort']: {
          ...prevState['Comfort'],
          id: this.props.characteristics['Comfort'].id
        }
      }))
    };
    if (this.props.characteristics['Quality'] !== undefined) {
      this.setState(prevState => ({
        ['Quality']: {
          ...prevState['Quality'],
          id: this.props.characteristics['Quality'].id
        }
      }))
    };
    if (this.props.characteristics['Length'] !== undefined) {
      this.setState(prevState => ({
        ['Length']: {
          ...prevState['Length'],
          id: this.props.characteristics['Length'].id
        }
      }))
    };
    if (this.props.characteristics['Fit'] !== undefined) {
      this.setState(prevState => ({
        ['Fit']: {
          ...prevState['Fit'],
          id: this.props.characteristics['Fit'].id
        }
      }))
    }
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });

    if (name === 'rec') {
      if (value === 'Yes') {
        this.setState({
          recBool: true
        })
      } else if (value === 'No') {
        this.setState({
          recBool: false
        })
      }
    }
  }

  handleCharInputChange(event) {
    let target = event.target;
    let value = target.value;
    let num = Number(target.attributes[1].value);
    let char = target.attributes[3].value;
    this.setState(prevState => ({
      [char]: {
        ...prevState[char],
        rating: num
      },
      [`${char}Selection`]: value
    }));
  }

  calculateCharTotal() {
    let charTotal = 0;
    if (this.state.Size.rating > 0) {
      charTotal += 1;
    }
    if (this.state.Width.rating > 0) {
      charTotal += 1;
    }
    if (this.state.Comfort.rating > 0) {
      charTotal += 1;
    }
    if (this.state.Quality.rating > 0) {
      charTotal += 1;
    }
    if (this.state.Length.rating > 0) {
      charTotal += 1;
    }
    if (this.state.Fit.rating > 0) {
      charTotal += 1;
    }
    return charTotal;
  }

  handleStarClick(event) {
    let newRating = Number(event.target.id)
    let newMeaning;
    if (newRating === 20) {
      newMeaning = 'Poor';
    } else if (newRating === 40) {
      newMeaning = 'Fair';
    } else if (newRating === 60) {
      newMeaning = 'Average';
    } else if (newRating === 80) {
      newMeaning = 'Good';
    } else if (newRating === 100) {
      newMeaning = 'Great';
    }

    this.setState({
      rating: newRating,
      meaning: newMeaning
    });
    this.props.recordClick(event)
  }

  handleSubmit(event) {
    event.preventDefault();
    let needWarning = false;
    let revCharacteristics = Object.keys(this.props.characteristics);
    let warningMessage = 'You must enter the following: ';
    let charTotal = this.calculateCharTotal();
    if (this.state.rating === 0) {
      needWarning = true;
      warningMessage += '\n' + 'Overall rating';
    }
    if (charTotal < revCharacteristics.length) {
      needWarning = true;
      warningMessage += '\n' + 'Characteristic ratings';
    }
    if (this.state.body.length < 50) {
      needWarning = true;
      warningMessage += '\n' + 'Review body';
    }
    if (this.state.nickname.length < 1) {
      needWarning = true;
      warningMessage += '\n' + 'Nickname';
    }
    if (this.state.email.length < 6) {
      needWarning = true;
      warningMessage += '\n' + 'Email';
    }
    if (needWarning) {
      alert(warningMessage);
    } else {
      $.ajax({
        type: 'POST',
        url: '/reviews/addReview',
        data: {
          product_id: this.props.productId,
          rating: this.state.rating / 20,
          summary: this.state.summary,
          body: this.state.body,
          recommend: this.state.recBool,
          name: this.state.nickname,
          email: this.state.email,
          photos: [],
          characteristics: {
            Size: this.state.Size,
            Width: this.state.Size,
            Comfort: this.state.Comfort,
            Quality: this.state.Quality,
            Length: this.state.Length,
            Fit: this.state.Fit
          }
        },
        success: () => {
          $('.reviewForm-modal').remove();
        },
        error: (err) => {
          console.log('ERROR in addReview post!: ', err)
        }
      });
    }
    this.props.recordClick(event)
  }

  render() {
    if (!this.props.show) {
      return null
    }
    let characteristics = Object.keys(this.props.characteristics);
    let chars;
    if (characteristics.length > 0) {
      chars = characteristics.map((char, index) =>
        <FormCharacteristic
          key={`char-${index}`}
          char={char}
          handleCharInputChange={this.handleCharInputChange}
          SizeSelection={this.state.SizeSelection}
          WidthSelection={this.state.WidthSelection}
          ComfortSelection={this.state.ComfortSelection}
          QualitySelection={this.state.QualitySelection}
          LengthSelection={this.state.LengthSelection}
          FitSelection={this.state.FitSelection}
          className="characteristicsInReviewForm"
          recordClick={(e) => this.props.recordClick(e)} />
      )
    }
    let counter;
    if (this.state.body.length < this.state.charsLeft) {
      counter = <span
        className="counterInReviewForm"
        onClick={(e) => this.props.recordClick(e)}>
          Minimum required characters left: [{this.state.charsLeft - this.state.body.length}]
      </span>
    } else {
      counter = <span
        className="counterInReviewForm"
        onClick={(e) => this.props.recordClick(e)}>
          Minimum reached
      </span>
    }
    // let picsButton;
    // if (this.state.photos.length < 5) {
    //   picsButton = <button>Choose File</button>
    // }

    return (
      <div className="reviewForm-modal" onClick={(e) => this.props.recordClick(e)}>
        <div className="reviewForm-content">
          <div className="reviewForm-header">
            <h2 className="reviewForm-title">Write Your Review</h2>
            <h3 className="reviewForm-subtitle">About the {this.props.name}</h3>
          </div>
          <div className="reviewForm-body">
            <h4 className="formReviewInput"><u className="overallRating" onClick={(e) => this.props.recordClick(e)}>Overall Rating</u><small><sup>*</sup></small></h4>
            <FormStars
              starsClickMandatory={this.starsClickMandatory}
              clickStars={this.handleStarClick}
              rating={this.state.rating}
              meaning={this.state.meaning}
              recordClick={(e) => this.props.recordClick(e)} />
            <form>
              <label>
                <h4 className="formReviewInput"><u className="doYouRec" onClick={(e) => this.props.recordClick(e)}>Do you recommend this product?</u><small><sup>*</sup></small></h4>
                <input
                  name="rec"
                  type="radio"
                  value="Yes"
                  defaultChecked
                  onChange={this.handleInputChange}
                  className="formInputYes"
                  onClick={(e) => this.props.recordClick(e)}/>Yes
                <input
                  name="rec"
                  type="radio"
                  value="No"
                  onChange={this.handleInputChange}
                  className="formInputNo"
                  onClick={(e) => this.props.recordClick(e)}/>No
              </label>
              <label>
                {chars}
              </label>
              <label>
                <h4 className="reviewsInput"><u className="reviewSummary" onClick={(e) => this.props.recordClick(e)}>Review Summary</u></h4>
                <textarea
                  name="summary"
                  value={this.state.summary}
                  placeholder="Example: Best purchase ever!"
                  maxLength="60"
                  rows={1}
                  cols={60}
                  onChange={this.handleInputChange}
                  className="formTextAreaSummary"
                  onClick={(e) => this.props.recordClick(e)} />
              </label>
              <label>
                <h4 className="reviewsInput"><u className="reviewBody" onClick={(e) => this.props.recordClick(e)}>Review Body</u><small><sup>*</sup></small></h4>
                <textarea
                  name="body"
                  value={this.state.body}
                  placeholder="Why did you like the product or not?"
                  minLength="50"
                  maxLength="1000"
                  rows={6}
                  cols={60}
                  onChange={this.handleInputChange}
                  className="formTextAreaBody"
                  onClick={(e) => this.props.recordClick(e)} />
                <br></br>
                {counter}
              </label>
              <label>
                <h4 className="reviewsInput"><u className="formNickname" onClick={(e) => this.props.recordClick(e)}>What is your nickname?</u><small><sup>*</sup></small></h4>
                <input
                  name="nickname"
                  type="text"
                  value={this.state.nickname}
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  onChange={this.handleInputChange}
                  className="formTextNickName"
                  onClick={(e) => this.props.recordClick(e)} />
                <br></br>
                  For privacy reasons, do not use your full name or email address
              </label>
              <label>
                <h4 className="reviewsInput"><u className="formEmail" onClick={(e) => this.props.recordClick(e)}>Your Email</u><small><sup>*</sup></small></h4>
                <textarea
                  name="email"
                  type="email"
                  value={this.state.email}
                  placeholder="Example: jackson11@email.com"
                  maxLength="60"
                  rows={1}
                  cols={30}
                  onChange={this.handleInputChange}
                  className="formTextAreaEmail"
                  onClick={(e) => this.props.recordClick(e)} />
                <br></br>
                  For authentication reasons, you will not be emailed
                <br></br>
                <br></br>
              </label>
              <div className="submitReviewButton">
                <input type="submit" value="Submit review" onSubmit={ () => { return false } } onClick={this.handleSubmit}></input>
              </div>
            </form>
          </div>
          <div className="reviewForm-footer">
            <button className="reviewForm-button" onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewForm;