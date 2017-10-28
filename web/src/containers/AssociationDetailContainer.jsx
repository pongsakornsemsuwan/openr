import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PopularityPeriod from '../components/PopularityPeriod/PopularityPeriod';
import { fetchAssociatedItems } from '../actions/AssociationAction'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Link, withRouter } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';


class AssociationDetailContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fetchAssociatedItems(this.props.dispatch, this.props.match.params.sku, this.props.storeId);
  }

  renderItemList(){
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Item Code</TableHeaderColumn>
            <TableHeaderColumn>Confidence</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.associatedItems.map((item, index)=>{
            return (
              <TableRow key={index}>
                <TableRowColumn>{index+1}</TableRowColumn>
                <TableRowColumn>{item.sku}</TableRowColumn>
                <TableRowColumn>{item.confidence}</TableRowColumn>
              </TableRow>    
            )
          })}
        </TableBody>
      </Table>
    )
  }

  render(){
    console.log('route')
    console.log(this.props);

    return (
      <div style={{padding:50}}>
        <div style={{marginBottom:50}}>
          <h2>Association Based Recommendation</h2>
          <p>Items customer bought together with <span style={{fontWeight:'bold',fontSize:20}}>{this.props.match.params.sku}</span></p>
          <div>You can access this list by calling <span className="code">GET http://openr.net/api/association/item/{this.props.match.params.sku}/?key={this.props.storeId}</span></div>
          {this.props.isLoading ? 
            <div style={{textAlign:'center',marginTop:100}}><CircularProgress size={80} thickness={5} /></div> :
              this.props.associatedItems.length > 0 ? 
              this.renderItemList()
              : <div style={{marginTop:100,fontWeight:'bold',textAlign:'center', color:'rgb(76, 86, 106)', fontSize:36}}>No Data</div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    associatedItems: state.AssociationReducer.associatedItems,
    storeId: state.SessionReducer.key,
    isLoading: state.AssociationReducer.isLoading,
  }
}

function mapDispatchToProps(dispatch){

}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(AssociationDetailContainer)