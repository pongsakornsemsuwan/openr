import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class PopularityList extends React.Component {
  constructor(props){
    super(props)
  }

  renderItemList(){
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Item Code</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.itemList.map((item, index)=>{
            return (
              <TableRow key={index}>
                <TableRowColumn>{index+1}</TableRowColumn>
                <TableRowColumn>{item.itemCd}</TableRowColumn>
                <TableRowColumn>{item.amount}</TableRowColumn>
              </TableRow>    
            )
          })}
        </TableBody>
      </Table>
    )
  }

  render(){
    console.log('popularityList');
    console.log(this.props);
    return (
      <div>
        {this.renderItemList()}
      </div>
    )
  }
}

export default PopularityList;
