import React from 'react';
import { connect } from 'react-redux';
import { getJson } from '../../actions/json2htmlActions';
import { getPageSelector } from '../../reducers/json2htmlReducers';

const mapStateToProps = (state) => {
  console.log(';;;;', state)
  return {
    json: state.json // getPageSelector(state)
  }
}
//Step 2: This connects the action, getArticles, to dispatch the action.
const mapDispatchToProps = (dispatch) => ({
  fetchJson: (props) => {
    return dispatch(
      getJson(props.edpoint, props.params)
    );
  }
});

//Step 4: Merging it to a prop makes it available in the component, 
// in this case on the componentDidMount life cycle event.
// This could just as easily be a click, submit, type, or other type of event.
class Json2html extends React.Component {
  constructor(props) {
    super(props);
    console.log('<<<<', props)
  }

  componentDidMount() {
    this.props.fetchJson(this.props);
  }

  render() {
    console.log('???????', this.props)
    let root = React.createElement('div', null, null)
    return (<p>khjlkuhjl</p>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Json2html)
