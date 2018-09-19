import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from 'Nav';

class Main extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render () {

    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {

  }
};

export default connect(mapStateToProps) (Main);
