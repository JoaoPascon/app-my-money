import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import DashBoardReducer from '../dashboard/dashBoardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer
})

export default rootReducer