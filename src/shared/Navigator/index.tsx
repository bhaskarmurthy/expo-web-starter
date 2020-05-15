/* eslint-disable react/prop-types */
import React, { useContext, useState, useCallback, useMemo, ReactChild, ReactElement } from 'react'
import { __RouterContext, matchPath, Route } from 'react-router'
import { NativeRouter } from 'react-router-native'
import { ScreenStack, Screen, ScreenStackHeaderConfig, enableScreens } from 'react-native-screens'
import routes from './routes' // Array with react-router props

enableScreens()

const renderScene: React.FC<any> = ({ children, location, context, onDismissed }) => {
    let element: any, match: any
    React.Children.forEach(children, (child: ReactChild) => {
        if (match == null && React.isValidElement(child)) {
            element = child
            const path = child.props.path || child.props.from
            match = path ? matchPath(location.pathname, { ...child.props, path }) : context.match
        }
    })

    return match ? (
        <Screen
            stackPresentation="formSheet"
            style={{
                flexGrow: 1,
            }}
            onDismissed={(e) => onDismissed(location.pathname)}
            key={`screen-${location.pathname}`}
        >
            <ScreenStackHeaderConfig title={location.pathname} />
            {React.cloneElement(element, { location: context.location, computedMatch: match })}
        </Screen>
    ) : null
}

const Transitioner = ({ children }) => {
    const context = useContext(__RouterContext)
    const [entries, setEntries] = useState([context.location])
    const [prevLocation, setPrevLocation] = useState(context.location)

    const popManager = useCallback(
        (key?) => {
            const currentEntries = Array.from(entries)
            const index = currentEntries.findIndex((entrie) => entrie.pathname === (key || prevLocation.pathname))
            if (index > -1) currentEntries.splice(index, 1)
            setEntries(currentEntries)
        },
        [setEntries, entries, prevLocation]
    )
    // goBack history when gestureEnable in iOS dismiss screen and pop
    const onDismissed = useCallback(
        (key) => {
            popManager(key)
            context.history.goBack()
        },
        [popManager]
    )

    //  getDerivedStateFromProps to detect change location - https://es.reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
    if (prevLocation !== context.location) {
        if (context.history.action === 'POP') {
            popManager()
        } else if (context.history.action === 'PUSH') {
            const currentEntries = Array.from(entries)
            currentEntries.push(context.location)
            setEntries(currentEntries)
        }
        //console.log(context.history.action, context.history.location.pathname);
        setPrevLocation(context.location)
    }

    return (
        <ScreenStack style={{ flex: 1 }}>
            {entries.map((entrie) => renderScene({ children, location: entrie, context, onDismissed }))}
        </ScreenStack>
    )
}

const RouterStack = React.memo(({ children }) => {
    return <Transitioner>{children}</Transitioner>
})

const Navigator: React.FC = () => (
    <NativeRouter>
        <RouterStack>
            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </RouterStack>
    </NativeRouter>
)

export default Navigator
