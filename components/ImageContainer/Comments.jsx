import Comment from "./Comment"
import './Comments.css'

function Comments (props){
    return (
        <ul className="comments">{
            props.ImageData.comments.map( comment => <Comment key={comment.id} comments={comment} /> )
        }
         
          {/* <li>And replace them with the real ones</li>
          <li>From the server</li> */}
        </ul>
    )
}
export default Comments