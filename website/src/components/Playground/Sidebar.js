/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import React, {Component} from 'react';
import './Sidebar.css';

type Props = {
  width?: number,
  children: any,
};

export default class Sidebar extends Component<Props> {
  render() {
    return (
      <div className="Sidebar" style={{width: this.props.width}}>
        {this.props.children}
      </div>
    );
  }
}