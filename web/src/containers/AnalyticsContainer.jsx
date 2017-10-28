import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Popularity',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'สินค้าที่ซื้อด้วยกัน',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
];


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    height: '100%',
    overflowY: 'auto',
  },
};

class AnalyticsContainer extends React.Component {
  constructor(props){
    super(props);


  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              style={{width:300,height:300}}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }

}

export default AnalyticsContainer;