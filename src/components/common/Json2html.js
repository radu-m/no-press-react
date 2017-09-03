import React from 'react';
import { connect } from 'react-redux';
import {getPage} from '../../actions/pageActions';
import {getPageSelector} from '../../reducers/pageReducers';

const mapStateToProps = (state) => {
  console.log(';;;;',state)
  return {
    page: state.page // getPageSelector(state)
  }
}
//Step 2: This connects the action, getArticles, to dispatch the action.
const mapDispatchToProps = (dispatch) => ({
  fetchPage: page => dispatch(getPage())
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
    const { fetchPage } = this.props;
    fetchPage();
  }
 
  render() {
    return (<p>khjlkuhjl</p>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Json2html)
