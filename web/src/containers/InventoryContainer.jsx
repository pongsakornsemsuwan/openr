import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/InventoryAction'

class InventoryContainer extends React.Component {
  constructor(props){
    super(props);
  }

  async componentDidMount(){
    fetchItems(this.props.dispatch, this.props.storeId);
  }

  renderIntenvory(){
    console.log(this.props.items);
    return this.props.items.map( (item, index) => {
     return (<TableRow key={index}>
        <TableRowColumn style={{width:80}}>{index+1}</TableRowColumn>
        <TableRowColumn style={{width:200}}>{item.sku}</TableRowColumn>
        <TableRowColumn>{item.name}</TableRowColumn>
      </TableRow>)
    })
  }
  render() {
    console.log(this.props.items)
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width:80}}></TableHeaderColumn>
            <TableHeaderColumn style={{width:200}}>Item Code</TableHeaderColumn>
            <TableHeaderColumn>Item Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderIntenvory()}
        </TableBody>
      </Table>
    )
  }

}

function mapStateToProps(state){
  return {
    items: state.InventoryReducer.items,
    storeId: state.SessionReducer.key
  }
}

export default connect(mapStateToProps)(InventoryContainer);