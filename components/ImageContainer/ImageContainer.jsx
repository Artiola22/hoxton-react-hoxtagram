import ImageCart from './ImageCart'
import './ImageContainer.css'
function ImageContainer (props){
    return (
        <section className="image-container">
            {
                props.data.map(ImageData => <ImageCart 
                    key={ImageData.id}
                    likeImage={props.likeImage}
                     ImageData={ImageData} />)
            }
        
    </section>
    )
}
export default ImageContainer