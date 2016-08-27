//import React from 'react';
import { connect } from 'react-redux';
import Settingform from '../views/settings-form';
import * as settingsApi from '../../api/settings-api';
import store from '../../store';

const SettingsListContainer = React.createClass({
 
  componentDidMount: function() {
    //userApi.getUsers();
    const { sets } = this.props.params;
    settingsApi.get(sets);
    
    //store.dispatch(loadSearchLayout('search', 'Search Results'));
  },
    handleSubmit:function (obj) {  
        alert($(obj.target).serialize());
        obj.preventDefault();
        return false;
    },
  render: function() {
    return (
      <Settingform handleSubmit={this.handleSubmit} keys={this.props.keys} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    keys: store.settingsState.keys
  };
};

export default connect(mapStateToProps)(SettingsListContainer);
