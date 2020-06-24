import React, { Component } from "react";
import { View } from "@tarojs/components";

import Item from './item';

class Layout extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { header, item } = this.props;

    console.log(this.props);

    return (
      <View className="index">
        {[1, 2, 34].map(item => {
          return <Item key={item} content={item} />;
        })}
        {item.map(i => i.content)}
        {header}
        {this.props.children}
      </View>
    );
  }
}

export default Layout;
