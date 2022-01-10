import Comments from "./Comments"
import Image from "./Image"
import LikeSection from "./LikeSection"
import Title from "./Title"
import './ImageCart.css'

function ImageCart(props){
    return (
        <article className="image-card">
        <Title  ImageData={props.ImageData}/>
        <Image  ImageData={props.ImageData}/>
        <LikeSection  images={props.ImageData}/>
        <Comments ImageData={props.ImageData} />
      </article>
    )
}
export default ImageCart 