import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/json2htmlActions';

class HtmlFromJson extends React.Component {
  constructor (props, context) {
    super(props, context);
    console.log('///////////??####?', props);

    this.rootElem = document.createElement('div');
    this.attrsBlackList = {
      img: [ 'width', 'height' ]
    };
  }

  componentDidMount () {
    this.props.actions.getJson({
          endpoint: 'get_page',
          params: {
            slug: 'home'
          }
        })
      .then((result) => {
        console.log('*****88**', result)

        this.parseJson(result.value.data.page);

        console.log('+++++', this.rootElem)

      });
  }

  parseJson (json, $parent = this.rootElem) {
    if (typeof json === 'string') {
      /** fix for situations where the string does not contain markup, but it should */
      json = {
        value: json,
        nodeType: 3,
        tag: 'p'
      };
    }

    if (json.nodeType !== 3) {
      let elem = document.createElement(json.tag);

      if (json.attrs) {
        for (let [ aName, aValue ] of Object.entries(json.attrs)) {
          /**
           * This filtering should be done on the server
           **/
          if (!this.attrsBlackList[ json.tag ]
              || this.attrsBlackList[ json.tag ].indexOf(aName)
                 < 0) {
            elem.attr(aName, aValue);
          }
        }
      }

      if (json.children) {
        for (let [ k, child ] of Object.entries(json.children)) {
          if (k && child) {
            $parent.append(this.parseJson(child, elem));
          }
        }
      }

      if (json.tag === 'root') {
        $parent.html(elem.html());
      } else {
        $parent.append(elem);
      }
    } else {
      $parent.append(json.value);
    }
  }

  render () {
    // const {fuelSavings} = this.props;
    console.log('*********', this.props);

    return (
      <div>
        <h2>Fuel Savings Analysis</h2>
      </div>
    );
  }
}

const {func, shape, number, bool, string} = PropTypes;

HtmlFromJson.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  console.log('=+==+++=', state);
  return {
    ...state
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HtmlFromJson);
