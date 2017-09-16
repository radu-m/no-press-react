import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/json2htmlActions';
import HtmlFromJson from '../components/common/HtmlFromJson';

export const Json2Html = (props) => {
  return (
    <HtmlFromJson
      getJson={() => {
        return props.actions.getJson({
          endpoint: 'get_page',
          params: {
            slug: 'home'
          }
        });
      }}
    />
  );
};

Json2Html.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    json2html: state.json2html
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
)(Json2Html);
