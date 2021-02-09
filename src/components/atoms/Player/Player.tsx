import React from 'react'
import ReactPlayer from 'react-player'

export type PlayerProps = {
    url: string
}

export default function Player({url}:PlayerProps){
    return <ReactPlayer width="100%" url={url} controls={true}/>
}