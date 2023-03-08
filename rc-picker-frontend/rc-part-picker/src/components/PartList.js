import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import RCAPI from "../api";
import SearchForm from "./SearchForm"
import "./style.css"

function PartList(){
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
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
        async function GetProduct(term){
              let product = await RCAPI.getSearch(term)
              product.length !== 0 ? setProducts(product) : setNoProdFound(true)
          }
          GetProduct(searchTerm)
      }, [searchTerm]
    )

    const getSearchTerm = (data) => {
        setSearchTerm(data.searchTerm)
    }

    return (
        <div>
            <SearchForm getSearchTerm={getSearchTerm}/>
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

export default PartList