// @flow

import React, { Component } from 'react'

import * as Constants from '../../../../../../constants/indexConstants'
import { MenuDropDownStyle } from '../../../../../../styles/indexStyles'
import { MenuDropDown } from '../../../../components/MenuDropDown/MenuDropDown.ui.js'

type Props = {
  walletKey: string,
  executeWalletRowOption: (walletKey: string, option: string) => void
}
export default class WalletListRowOptions extends Component<Props> {
  options: Array<{ value: string, label: string }>
  constructor (props: Props) {
    super(props)

    this.options = []
    for (const walletOption in Constants.WALLET_OPTIONS) {
      const option = Constants.WALLET_OPTIONS[walletOption]
      if (!option.currencyCode || this.props.currencyCode === option.currencyCode) {
        const temp = {
          value: option.value,
          label: option.label
        }
        this.options.push(temp)
      }
    }
  }

  optionAction = (optionKey: string) => {
    this.props.executeWalletRowOption(this.props.walletKey, optionKey)
  }

  render () {
    const modifiedMenuDropDownStyle = {
      // manually overwrite width
      ...MenuDropDownStyle,
      menuIconWrap: {
        ...MenuDropDownStyle.menuIconWrap,
        width: 46
      }
    }
    return <MenuDropDown style={modifiedMenuDropDownStyle} onSelect={this.optionAction} data={this.options} />
  }
}
