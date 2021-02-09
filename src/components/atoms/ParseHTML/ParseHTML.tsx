import React from 'react'
import parse from 'html-react-parser';

export type PlayerProps = {
    html: string
}

export default function Player({html}:PlayerProps){
    return <>{parse(html)}</>
}