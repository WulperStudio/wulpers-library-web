import React from "react"
import ReactTimeAgo from 'react-timeago'

export type TimeAgoProps = {
  date: any
}

export default function TimeAgo({ date }: TimeAgoProps) {
  return (
    <ReactTimeAgo date={1611367941038} />
  )
}
