import React from 'react';
import PopularityList from './PopularityList/PopularityList'

const PopularityPeriod = ({title, itemList}) => {
  console.log('period');
  console.log(itemList);
  return (
    <div>
      <h3 style={{marginBottom:10}}>{title}</h3>
      <PopularityList itemList={itemList}/>
    </div>
  )
}

export default PopularityPeriod;