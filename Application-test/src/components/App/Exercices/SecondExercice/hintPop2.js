import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import PropTypes from 'prop-types';


export default class HintPop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" color="" onClick={this.toggle}>
          Indice
        </Button>{' '}
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>header Hint</PopoverHeader>
          <PopoverBody className="text-info">encadre ton h1 en le rangeant dans des balises {'<header>'}{'</header>'}, et écris ton sous-titre dans des balises {'<h2>'}{'</h2>'}.</PopoverBody>
        </Popover>
      </div>
    );
  }
}
Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string,
};
Popover.propTypes = {
  // boolean to control the state of the popover
  isOpen: PropTypes.bool,
  // callback for toggling isOpen in the controlling component
  toggle: PropTypes.func,
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,
  // Where to inject the popper DOM node, default to body
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  // Apply class to the inner-popover
  innerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ]),
  // Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
