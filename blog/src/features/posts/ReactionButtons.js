import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch()

    const reactionEmojis = {
        like: '👍',
        loveIt: '❤️',
        haha: '😂'
    }

    const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
            <button key={name}
                    type='button'
                    className='reactionButton'
                    onClick={ () => dispatch(reactionAdded({ postId: post.id, reaction: name })) }>
                    {emoji} {post.reactions[name]}    
            </button>
        )
    })

    return (
       <> {reactionButtons} </>
    )
}

export default ReactionButtons