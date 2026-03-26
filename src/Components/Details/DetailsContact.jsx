
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { FaTruckFast } from 'react-icons/fa6'
import { LuReplaceAll } from 'react-icons/lu'
import { FaShieldVirus } from 'react-icons/fa'
import Star from '../Star/Star'
import Breadcrumb from '../Breadcrumb/Breadcrumb'


const DetailsContact = ({products}) => {
    const {id} = useParams()
  return (
    <Main>
        {
            products.map((curElm)=>{
                if(curElm.id==id){
                    return(
                        
                        <div className="main__wrapper">

        <Breadcrumb curElm={curElm}/>
                              <div className="product_detail__Page grid grid__two">
                                  <div className="product_image">
                                      <img src={curElm.image} alt={curElm.title} />
                                  </div>
                                  <div className="product_content">
                                      <h4>{curElm.title} <span className='category' >({curElm.category})</span> </h4>
                                      <p><Star/></p>
                                      <h5>{curElm.rating.rate}</h5>
                                      <p>MRP: {curElm.price}</p>
                                      <div className="product_warranty">
                                          <div className="product_warranty__data">
                                          <FaTruckFast className='warranty_icon'  />
                                          Free Shipping
                                          </div>
                                          <div className="product_warranty__data">
                                          <LuReplaceAll className='warranty_icon' />
                                          30 Days Replacement
                                          </div>
                                          <div className="product_warranty__data">
                                          <FaShieldVirus className='warranty_icon'  />
                                          2 Years Warranty
                                          </div>
                                      </div>
                                      <div className="product_data__info">
                                          <p>Available : <span>({curElm.rating.count > 0 ? 'In Stock' : 'Not Available'})</span>
                                          </p>
                                          <p>
                                              Brand : <span>{curElm.description}</span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    )
                }
            })
        }

    </Main>
  )
}
const Main = styled.section`


.product_detail__Page{
    margin-top:50px;
}

.product_warranty{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom:20px;

    .product_warranty__data{
        display:flex;
        flex-direction:column;
        align-items:center;

            .warranty_icon{
                margin-bottom:10px;
                background-color:${({theme}) => theme.common.greenBg };
                width:30px;
                height:30px;
                padding:5px;
                border-radius:100px;
            }
    }
}

.category{
    font-size:18px;
    color:${({theme}) => theme.common.greenBg };
}

@media(width <= 500px){
    .grid__two{
        grid-template-columns:repeat(1, 1fr);
    }
}`

export default DetailsContact