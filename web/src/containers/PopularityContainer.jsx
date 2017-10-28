import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PopularityPeriod from '../components/PopularityPeriod/PopularityPeriod';
import { fetchPopular } from '../actions/PopularAction'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const titleMap = {
  0: 'All',
  7: '7 days',
  14: '14 days',
  21: '21 days',
  30: '1 month',
  60: '2 months',
  90: '3 months',
  120: '4 months',
}

class PopularityContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:0
    }
  }
  
  componentDidMount(){
    fetchPopular(this.props.dispatch, 7, this.props.storeId)
  }
  
  async handleChange(event, selectedIndex, menuItem){
    await this.setState({value: menuItem});
    fetchPopular(this.props.dispatch, menuItem, this.props.storeId)
  }

  render(){
    console.log('pop item')
    console.log(this.props.items)
    return (
      <div style={{padding:50}}>
        <div style={{marginBottom:50}}>
          <h2>Popularity Based Recommendation</h2>
          <p>Recommendation based on what sell best in your store</p>
        </div>
        <div>
          <SelectField
            floatingLabelText="Period"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          >
            <MenuItem value={0} primaryText="All Time" />
            <MenuItem value={7} primaryText="7 days" />
            <MenuItem value={14} primaryText="14 days" />
            <MenuItem value={21} primaryText="21 days" />
            <MenuItem value={30} primaryText="1 month" />
            <MenuItem value={60} primaryText="2 months" />
            <MenuItem value={90} primaryText="3 months" />
          </SelectField>
        </div>
        <PopularityPeriod itemList={this.props.items} title={titleMap[this.state.value]}/>

        {/* <PopularityPeriod itemList={itemList} title="30 days"/> */}

        {/* <PopularityPeriod itemList={itemList} title="All time"/> */}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    items: state.PopularReducer.items,
    storeId: state.SessionReducer.key
  }
}

function mapDispatchToProps(dispatch){

}

export default compose(
  connect(mapStateToProps)
)(PopularityContainer)