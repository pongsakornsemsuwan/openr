import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PopularityPeriod from '../components/PopularityPeriod/PopularityPeriod';
import { fetchCollaboratedItems } from '../actions/CollaborativeAction'
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


class CollaborativeDetailContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fetchCollaboratedItems(this.props.dispatch, this.props.match.params.sku, this.props.storeId);
  }

  renderItemList(){
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width:80}}></TableHeaderColumn>
            <TableHeaderColumn style={{width:200}}>Item Code</TableHeaderColumn>
            <TableHeaderColumn>Item Name</TableHeaderColumn>
            <TableHeaderColumn>Correlation</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.collaboratedItems.map((item, index)=>{
            return (
              <TableRow key={index}>
                <TableRowColumn style={{width:80}}>{index+1}</TableRowColumn>
                <TableRowColumn style={{width:200}}>{item.itemCd}</TableRowColumn>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.corr}</TableRowColumn>
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
          <h2>Collaborative Based Recommendation</h2>
          <p>Items that are relevance with <span style={{fontWeight:'bold',fontSize:20}}>{this.props.match.params.sku}</span></p>
          <div>You can retrieve this list by calling <span className="code">GET http://openr.net/api/collaborative/item/{this.props.match.params.sku}/?key={this.props.storeId}</span></div>
          {this.props.isLoading ? 
            <div style={{textAlign:'center',marginTop:100}}><CircularProgress size={80} thickness={5} /></div> :
              this.props.collaboratedItems.length > 0 ? 
              this.renderItemList()
              : <div style={{marginTop:100,fontWeight:'bold',textAlign:'center', color:'rgb(76, 86, 106)', fontSize:36}}>No Data</div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    collaboratedItems: state.CollaborativeReducer.collaboratedItems,
    storeId: state.SessionReducer.key,
    isLoading: state.CollaborativeReducer.isLoading,
  }
}

function mapDispatchToProps(dispatch){

}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(CollaborativeDetailContainer)