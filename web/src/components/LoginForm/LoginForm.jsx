import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="container" style={{width:400, margin:'50 auto 0 auto', textAlign:'center', border:'1px solid #D8DEE9'}}>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:15,marginTop:30}}>
          <Field name="email" component={renderTextField} hintText="Email" />
        </div>
        {/* <TextField name="email" type="text"/> */}
        {/* <TextField name="password" type="password"/> */}
        <div style={{marginBottom:30}}>
          <Field type="password" name="password" component={renderTextField} hintText="Password"/>
        </div>

        <div style={{marginBottom:30}}>
          <RaisedButton label="Login" type="submit" primary={true} onClick={handleSubmit} />
        </div>

      </form>
    </div>


  )
}

export default compose(
  reduxForm({
    form: 'login-form',
  })
)(LoginForm);