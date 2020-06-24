import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import Layout from '../../components/layout';

import Item from "../../components/item";

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props.store

    const test = {style: {width: 100}};

    return (
      <Layout
        {...this.props}
        header={<View>1111</View>}
        item={[
          {
            id: 1,
            content: <Item content={1} />
          },
          {
            id: 2,
            content: <Item content={2} />
          }
        ]}
      >
        <View className="index" {...test}>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.incrementAsync}>Add Async</Button>
          <Text>{counter}</Text>
        </View>
      </Layout>
    );
  }
}

export default Index
