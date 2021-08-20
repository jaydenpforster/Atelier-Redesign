import React from 'react';

const FormCharacteristic = (props) => {
  let lowest,
    second,
    middle,
    fourth,
    highest,
    selected;

  if (props.char === 'Size') {
    lowest = 'A size too small';
    second = '1/2 a size too small';
    middle = 'Perfect';
    fourth = '1/2 a size too big';
    highest = 'A size too big';
    selected = props.SizeSelection;
  }

  if (props.char === 'Width') {
    lowest = 'Too Narrow';
    second = 'Slightly narrow';
    middle = 'Perfect';
    fourth = 'Slightly wide';
    highest = 'Too Wide';
    selected = props.WidthSelection;
  }

  if (props.char === 'Comfort') {
    lowest = 'Uncomfortable';
    second = 'Slightly uncomfortable';
    middle = 'Ok';
    fourth = 'Comfortable';
    highest = 'Perfect';
    selected = props.ComfortSelection;
  }

  if (props.char === 'Quality') {
    lowest = 'Poor';
    second = 'Below average';
    middle = 'What I Expected';
    fourth = 'Pretty great';
    highest = 'Perfect';
    selected = props.QualitySelection;
  }

  if (props.char === 'Length') {
    lowest = 'Runs short';
    second = 'Runs slightly short';
    middle = 'Perfect';
    fourth = 'Runs slightly long';
    highest = 'Runs Long';
    selected = props.LengthSelection;
  }

  if (props.char === 'Fit') {
    lowest = 'Runs tight';
    second = 'Runs slightly tight';
    middle = 'Perfect';
    fourth = 'Runs slightly loose';
    highest = 'Runs loose';
    selected = props.FitSelection;
  }

  return (
    <div>
      <header className="formCharHeading">
        <h4 className="formReviewInput"><u>{props.char}</u><small><sup>* </sup></small><span>{selected}</span></h4>
      </header>
      <table className="charTable">
        <tbody>
          <tr>
            <td>
              <input
                position="lowest"
                num={1}
                type="radio"
                value={`${lowest}`}
                char={props.char}
                name={`characteristics-${props.char}`}
                onChange={props.handleCharInputChange} />
            </td>
            <td>
              <input
                position="second"
                num={2}
                type="radio"
                value={`${second}`}
                char={props.char}
                name={`characteristics-${props.char}`}
                onChange={props.handleCharInputChange} />
            </td>
            <td>
              <input
                position="middle"
                num={3}
                type="radio"
                value={`${middle}`}
                char={props.char}
                name={`characteristics-${props.char}`}
                onChange={props.handleCharInputChange} />
            </td>
            <td>
              <input
                position="fourth"
                num={4}
                type="radio"
                value={`${fourth}`}
                char={props.char}
                name={`characteristics-${props.char}`}
                onChange={props.handleCharInputChange} />
            </td>
            <td>
              <input
                position="highest"
                num={5}
                type="radio"
                value={`${highest}`}
                char={props.char}
                name={`characteristics-${props.char}`}
                onChange={props.handleCharInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>{lowest}</label>
            </td>
            <td>
              <label>&nbsp;&nbsp;&nbsp;</label>
            </td>
            <td>
              <label>&nbsp;&nbsp;&nbsp;</label>
            </td>
            <td>
              <label>&nbsp;&nbsp;&nbsp;</label>
            </td>
            <td>
              <label>{highest}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FormCharacteristic;