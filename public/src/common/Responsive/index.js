import React from 'react';
import Responsive from 'react-responsive';

export const Mobile = ({children}) => <Responsive children={children} maxWidth={495} />
export const Tablet = ({children}) => <Responsive children={children} minWidth={496} maxWidth={959} />
export const Desktop = ({children}) => <Responsive children={children} minWidth={960} />
export const SmallScreen = ({children}) => <Responsive children={children} maxWidth={959} />
export const LargeScreen = ({children}) => <Responsive children={children} minWidth={496} />