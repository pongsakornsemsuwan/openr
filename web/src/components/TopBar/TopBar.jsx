import React from 'react';
import Avatar from 'material-ui/Avatar';
import { connect} from 'react-redux'
import { logoutFromApp } from '../../actions/LoginAction'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class TopBar extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    console.log(this.props.email)
    return (
      <AppBar style={{ textAlign:'right', alignItems:'center',display:'flex', justifyContent:'center', backgroundColor:'#4C566A', paddingRight:20}}
        titleStyle={{fontSize:24}}
        title={
          <div>
            <Avatar src="/user8-128x128.jpg" style={{marginTop:10,marginRight:10}}/>
            <span style={{fontSize:20,verticalAlign:'top'}}>Welcome, {this.props.email}</span>
          </div>}
        iconElementRight = {
          <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" onClick={this.props.logout} />
        </IconMenu>
        }
      >
      </AppBar>
      
      // <div style={{height:50, backgroundColor:'#4C566A', paddingRight:20}}>
      //   <div style={{float:'right'}}>
      //     <Avatar src="/user8-128x128.jpg" />
      //     <span>Welcome,</span> <span>{this.props.email}</span>
      //     <button onClick={this.props.logout}/>        
      //   </div>
      // </div>
    )
  }
}

function mapStateToProps(state){
  return {
    email: state.SessionReducer.userInfo.email
  }
}
function mapDispatchToProps(dispatch){
  return {
    logout: () => { dispatch(logoutFromApp()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);