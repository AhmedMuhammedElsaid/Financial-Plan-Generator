import React, { FunctionComponent } from 'react'
import { Spinner } from 'reactstrap'

const Loader:FunctionComponent = () => {
    return (
        <div className="Loader">
            <Spinner size="lg">Loading...</Spinner>
        </div>
    )
}

export default Loader
