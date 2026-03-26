
import styled from 'styled-components'

const MyImage = ({imgs}) => {
   
  return (
    <Main>
    <div className="product_Image">
        <img src={imgs[0]} alt="" />
    </div>

    {/* <div>
        <figure>
            <img src={myImage.url} alt={myImage.title} />
        </figure>
    </div> */}
    </Main>
  )
}
const Main = styled.section`
    display:grid;
    grid-template-columns:0.4fr 1fr;
    gap:20px;
    place-items:center;

    .box_image{
        margin-top:20px;
        cursor:pointer;
    }`

export default MyImage