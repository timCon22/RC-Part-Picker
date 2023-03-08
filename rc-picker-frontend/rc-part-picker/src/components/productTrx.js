import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import RCAPI from "../api";

// class GrabProducts extends React.Component {
//     // Constructor 
//     constructor(props) {
//         super(props);
   
//         this.state = {
//             DataisLoaded: false,
//             items: []
//         };
//     }
   
//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         fetch(
//     "http://localhost:3002/traxxas/all")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded){
//          return   <div>
//             <h1> Please wait some time.... </h1> 
//         </div> ;
//         } 
   
//         return (
//         <div>
//             <h1> Here is every Traxxas Model RC </h1>  {
//                 items.map((item) => ( 
//                 <ol>
//                     <img src={ item.srcTxt }/>
//                     <p>{ item.rawTxt }</p> 
//                     <a href={ item.rawLink }>Buy from retailer</a> 
//                 </ol>
//                 ))
//             }
//         </div>
//     );
// }
// }


function GrabProducts(){
    const [products, setProducts] = useState([])
    const [noProdFound, setNoProdFound] = useState(false)
    // const [pageNum, setPageNum] = useState(1)
    
    // const goForward = () =>{
    //     if(pageNum === 209){
    //         return
    //     }
    //     setPageNum(pageNum + 1);
    // } 
    
    // const goBack = () =>{ 
    //     if(pageNum === 1){
    //         return
    //     }
    //     setPageNum(pageNum - 1)
    // };

    useEffect(
      () => {
        async function GetProduct(){
              let product = await RCAPI.getAllProd()
              product.length !== 0 ? setProducts(product) : setNoProdFound(true)
          }
          GetProduct()
      }, []
    )


    return (
        <div>
            {/* <div className="next">
                <Button onClick={goBack}>Last</Button>{pageNum}<Button onClick={goForward}>Next</Button>
            </div> */}
            {noProdFound && <h3>Sorry there are no products that match.</h3>}
            {products.map(p => (
                <div className="card">
                    <img src={p.srcTxt}/>
                    <br/>
                    <a href={p.rawLink} className="buy" target="_blank">
                        Buy Part from ratailer
                    </a>
                    <p>{p.rawTxt}</p>
                </div>
                )
            )}
        </div>
    )
}


export default GrabProducts