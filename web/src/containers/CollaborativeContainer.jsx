import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PopularityPeriod from '../components/PopularityPeriod/PopularityPeriod';
import { fetchItems, filterCollaborativeItems } from '../actions/CollaborativeAction'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Link, withRouter } from 'react-router-dom';
import {grey500} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'

class CollaborativeContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fetchItems(this.props.dispatch, this.props.storeId );
  }

  renderItemList(){
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Item Code</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.items.map((item, index)=>{
            return (
              <TableRow key={index}>
                <TableRowColumn><Link to={this.props.match.url + '/' + item.sku}>{item.sku}</Link></TableRowColumn>
              </TableRow>    
            )
          })}
        </TableBody>
      </Table>
    )
  }

  handleFilter(e,val,d){
    console.log('asdasd');
    console.log(this.props)
    filterCollaborativeItems(this.props.dispatch, val);
  }

  render(){
    return (
      <div style={{padding:50}}>
        <div style={{marginBottom:50}}>
          <h2>Collborative Based Recommendation</h2>
          <p>Recommendation for items that usually bought together</p>
          <div style={{ marginRight:20}}>
            <FontIcon className='material-icons searchIcon' style={{position:'relative',top:8}} color={grey500}>search</FontIcon>
            <TextField hintText='Search' id='searchbox' fullWidth={false} name='searchbox'
              onChange={this.handleFilter.bind(this)}/>
          </div>  
        </div>
        <div>
          {this.renderItemList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    items: state.CollaborativeReducer.filteredItems,
    storeId: state.SessionReducer.key
  }
}

function mapDispatchToProps(dispatch){

}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(CollaborativeContainer)