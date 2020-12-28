import React from 'react'

import Toolbar from '../component/Navigation/Toolbar/Toolbar'
import Timesheet from '../component/TimeSheet/Timesheet'

function employee() {
    return (
        <React.Fragment>
            <Toolbar/>
            <Timesheet/>
        </React.Fragment>
    )
}

export default employee;