// @flow

import {connect} from 'react-redux'
// eslint-disable-next-line no-duplicate-imports
import ManageTokens from './ManageTokens.ui.js'
// eslint-disable-next-line no-duplicate-imports
import type {
  ManageTokensOwnProps,
  ManageTokensDispatchProps,
  ManageTokensStateProps
} from './ManageTokens.ui.js'
import {getEnabledTokens, setEnabledTokens} from '../../Wallets/action.js'
import type {GuiWallet, CustomTokenInfo} from '../../../../types'
import type {State} from '../../../ReduxTypes'

const mapStateToProps = (state: State, ownProps: ManageTokensOwnProps): ManageTokensStateProps => ({
  manageTokensPending: state.ui.wallets.manageTokensPending,
  guiWallet: ownProps.guiWallet,
  settingsCustomTokens: state.ui.settings.customTokens
})
const mapDispatchToProps = (dispatch: Dispatch): ManageTokensDispatchProps => ({
  getEnabledTokensList: (walletId: string) => dispatch(getEnabledTokens(walletId)),
  setEnabledTokensList: (walletId: string, enabledTokens: Array<string>, oldEnabledTokensList: Array<string>) => dispatch(setEnabledTokens(walletId, enabledTokens, oldEnabledTokensList))
})
export default connect(mapStateToProps, mapDispatchToProps)(ManageTokens)
