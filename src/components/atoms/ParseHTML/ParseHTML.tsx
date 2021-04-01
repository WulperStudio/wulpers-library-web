import React from 'react'
import parse from 'html-react-parser';

export type ParseHTMLProps = {
    html: string
}

export default function ParseHTML({html}:ParseHTMLProps){
    return <>{parse(html)}</>
}