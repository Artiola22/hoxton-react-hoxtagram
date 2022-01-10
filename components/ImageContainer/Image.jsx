import './Image.css'
function Image (props){
    return (
        <img src={props.ImageData.image} className="image" />
    )
}
export default Image