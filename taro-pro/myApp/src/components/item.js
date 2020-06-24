import React, { Component } from "react";
import { View } from "@tarojs/components";

class Item extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { content } = this.props;

    return <View className="index">{content}</View>;
  }
}

export default Item;
