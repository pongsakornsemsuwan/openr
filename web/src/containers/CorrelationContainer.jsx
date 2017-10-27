import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PopularityPeriod from '../components/PopularityPeriod/PopularityPeriod';

const itemList = [
  {
    itemCd:'a1'
  },
  {
    itemCd:'a2'
  }
  
]
const PopularityContainer = () => {
  console.log('aaaa');
  console.log(itemList);
  return (
    <div style={{padding:50}}>
      <div style={{marginBottom:50}}>
        <h2>Correlation Based Recommendation</h2>
        <p>Recommendation for items that usually bought together</p>
      </div>
      <PopularityPeriod itemList={itemList} title="7 days"/>

      <PopularityPeriod itemList={itemList} title="30 days"/>

      <PopularityPeriod itemList={itemList} title="All time"/>
    </div>
  )
}

function mapStateToProps(state, ownProps){

}

function mapDispatchToProps(dispatch){

}

export default compose(
  // connect(mapStateToProps, mapDispatchToProps)
)(PopularityContainer)