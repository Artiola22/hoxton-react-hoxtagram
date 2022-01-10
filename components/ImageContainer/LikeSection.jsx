import './LikeSection.css'
function LikeSection (props){
    return (
        <div className="likes-section">
          <span className="likes">{props.images.likes} likes</span>
          <button className="like-button">♥</button>
        </div>
    )
}
export default LikeSection