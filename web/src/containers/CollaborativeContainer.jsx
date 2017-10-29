import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
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
import CircularProgress from 'material-ui/CircularProgress';

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
            <TableHeaderColumn style={{width:80}}></TableHeaderColumn>
            <TableHeaderColumn style={{width:150}}>Item Code</TableHeaderColumn>
            <TableHeaderColumn>Item Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.items.map((item, index)=>{
            return (
              <TableRow key={index}>
                <TableRowColumn style={{width:80}}>{index+1}</TableRowColumn>
                <TableRowColumn style={{width:150}}><Link to={this.props.match.url + '/' + item.sku}>{item.sku}</Link></TableRowColumn>
                <TableRowColumn>{item.name}</TableRowColumn>
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
          <h2>Collaborative Based Recommendation</h2>
          <p>Recommendation for items that are relevance</p>
          <div style={{ marginRight:20}}>
            <FontIcon className='material-icons searchIcon' style={{position:'relative',top:8}} color={grey500}>search</FontIcon>
            <TextField hintText='Search' id='searchbox' fullWidth={false} name='searchbox'
              onChange={this.handleFilter.bind(this)}/>
          </div>  
        </div>
        <div>
          {this.props.items.length == 0 && this.props.isLoading ? 
            <div style={{textAlign:'center',marginTop:100}}><CircularProgress size={80} thickness={5} /></div> 
            : this.renderItemList()
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    items: state.CollaborativeReducer.filteredItems,
    isLoading: state.CollaborativeReducer.isLoading,
    storeId: state.SessionReducer.key
  }
}

function mapDispatchToProps(dispatch){

}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(CollaborativeContainer)