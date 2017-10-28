import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { withState, compose } from 'recompose';
import Divider from 'material-ui/Divider';
import { Link, withRouter } from 'react-router-dom';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';

const LeftPane = ({open, match}) => {
  return (
    <Drawer open={open} zDepth={1} containerStyle={{paddingTop:20}}>
      <img src="/logo.png" style={{marginLeft:50, width:80}}/>
      {/* <Subheader>Inventory</Subheader> */}
      <div style={{marginTop:40}}>
        <Link to={match.url + '/inventory'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon className="material-icons">local_mall</FontIcon>}>Inventory</MenuItem>
        </Link>
        <Divider/>
        {/* <Subheader>Customer</Subheader> */}
        <Link to={match.url + '/customer'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon className="material-icons">face</FontIcon>}>Customer</MenuItem>
        </Link>
        <Divider/>
        {/* <Subheader>Order</Subheader> */}
        <Link to={match.url + '/order'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon className="material-icons">shopping_cart</FontIcon>}>Order</MenuItem>
        </Link>
        <Divider/>
        {<Subheader>Analytics</Subheader>}
        {/* <Link to={match.url + '/analytics'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon className="material-icons">assessment</FontIcon>}>Analytics</MenuItem>
        </Link> */}
        <Link to={match.url + '/analytics/popularity'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon color="#BF616A" className="material-icons">star_rate</FontIcon>}>Popular</MenuItem>
        </Link>
        <Link to={match.url + '/analytics/correlation'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon color="#D08770" className="material-icons">timeline</FontIcon>}>Bought together</MenuItem>
        </Link>
        <Link to={match.url + '/analytics/collaborative'} style={{textDecoration:'none'}}>
          <MenuItem leftIcon={<FontIcon color="#EBCB8B" className="material-icons">thumb_up</FontIcon>}>Model Collaborative</MenuItem>
        </Link>
      </div>
    </Drawer>
  )
}

// class LeftPane extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       open: true
//     }
//   }
//   render() {
//     return (
//       <Drawer open={this.state.open}>
//         <MenuItem>Menu Item</MenuItem>
//         <MenuItem>Menu Item 2</MenuItem>
//       </Drawer>
//     )
//   }
// }

export default compose(
  withRouter,
  withState('open', 'toggleOpen', true)
)(LeftPane);

// export default LeftPane;