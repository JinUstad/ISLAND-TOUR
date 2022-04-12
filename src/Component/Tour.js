import React, { useState, useEffect } from "react";
import { JsonData } from "./JsonData";
function Tour() {
  const [data, SetData] = useState(null);
  const [showbtn, Setshowbtn] = useState(true);
  useEffect(() => {
    SetData(JsonData);
  }, []);

 var tourName = null;
 var tourRating = null;

 const TourCountry = (e) =>{
     tourName = e.target.value;
    //  console.log("hello tourcountry");
 }

 const TourRatings = (e) =>{
   tourRating = e.target.value;
  //  console.log("hello tour Rating area"); 
 }

  //Country Button
  var arrbtnCountry = [];
  JsonData.map((item)=>{
    arrbtnCountry.push(item.meanDistination)
  })

  var uniqueCountry = [... new Set(arrbtnCountry)]
  // console.log("Country Name ",uniqueCountry);

// Rating Area 

  var arrStarRating = [];
  JsonData.map((item)=>{
    arrStarRating.push(item.starRating)
  })

  var uniquestartRatingForMpa = [... new Set(arrStarRating)]
  // console.log('that is uniquwstart',uniquestartRatingForMpa);


  const filterApply = () =>{
    // console.log("tourism baby area",tourName,tourRating);
    if(tourName == null && tourRating == null){
      alert("Plx Select any filter Area")
    }
    else{
      if(tourName != null){
        var data = JsonData.filter((item)=> item.meanDistination === tourName)
        console.log(data);
        SetData(data)
      }

      if(tourRating != null){
        var dataRating = JsonData.filter((item)=> item.starRating == tourRating)
        console.log(dataRating);
        SetData(dataRating)
      }
    }
  }



  function l_to_h() {
    const copyData = [...JsonData];
    var sortedData = copyData.sort((a, b) => a.price - b.price);
    SetData(sortedData);
  }

  function h_to_l() {
    const copyData = [...JsonData];
    console.log(copyData);
    var sortedData = copyData.sort((a, b) => b.price - a.price);
    SetData(sortedData);
  }

  function reset() {
    SetData(JsonData);
  }

  function grid_btn() {
    var accessbtn = document.getElementById("grid_btn");
    if (showbtn == false) {
      Setshowbtn(true);
      accessbtn.innerHTML = "Grid";
    } else {
      Setshowbtn(false);
      accessbtn.innerHTML = "List";
    }
  }

  return (
    <>
      <div className="container main_accordion mt-3">
        <div className="row ">
          <div className="col-md-3">
            <div className="">
              <div className="box-content-colapse w-100">
                <div
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  onClick={reset}
                >
                  All Clear
                </div>

                <details className="details-comp">
                  <summary className="summary-colapse">Titulo aqui</summary>
                  <li>
                    {uniqueCountry.map((county)=>(
                      <button onClick={TourCountry} value={county}>{county}</button>
                    ))}
                  </li>
                </details>
                <details className="details-comp">
                  <summary className="summary-colapse">Titulo aqui</summary>
                  <div>
                    
                      {
                         uniquestartRatingForMpa.map((star)=>(
                           <label >
                             {
                                Array(star).fill().map((i)=>(
                                  
                                    
                                      <span style={{fontSize:'10px'}}>⭐</span>
                                  
                                ))
                             }
                             <input type="radio" onClick={TourRatings} value={star} name="startradio" />
                           </label>
                         ))
                      }
                   
                  </div>
                </details>
                <button className="w-75 ml-2" onClick={filterApply}>Apply</button>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="main_button">
              <button onClick={l_to_h}>Low to High</button>
              <button onClick={h_to_l}>High to Low</button>
              <button
                onClick={grid_btn}
                style={{ float: "right" }}
                id="grid_btn"
              >
                Grid
              </button>
            </div>
            {showbtn ? (
              <div className="row">
                {data != null
                  ? data.map((i, index) => (
                      <div className="col-md-6  ">
                        <div
                          className="accor_img "
                          style={{
                            border: "solid 1.3px #d1d1d1",
                            borderRadius: "4px",
                          }}
                        >
                          <div>
                            <img src={i.img} alt="" />
                            <h1
                              className="text-white"
                              style={{
                                position: "absolute",
                                marginTop: "-100px",
                              }}
                            >
                              {i.title}
                            </h1>
                            <div
                              style={{
                                position: "absolute",
                                marginTop: "-50px",
                              }}
                            >
                              {Array(parseInt(Math.ceil(i.starRating)))
                                .fill()
                                .map((_, i) => (
                                  <span>⭐</span>
                                ))}
                            </div>
                          </div>
                          <div>
                            <div className="row p-2">
                              <div
                                className="col-6"
                                style={{ borderRight: "1.4px solid #c0c0c0" }}
                              >
                                <h5 style={{ marginBottom: "2px" }}>
                                  Inclusion
                                </h5>
                                <spna>
                                  {i.inclusionFirstStuff.map((j, index) => (
                                    <span
                                      style={{
                                        textAlign: "center",
                                        fontSize: "14px",
                                        margin: "2px",
                                      }}
                                    >
                                      {j}
                                    </span>
                                  ))}
                                </spna>
                                <div>
                                  <div>
                                    <strong>{i.inclusionSecond}</strong>
                                  </div>
                                  {i.inclusionSecondCity.map((j, index) => (
                                    <span
                                      style={{
                                        borderRight: "2px solid black",
                                        padding: " 1px 3px 1px 3px",
                                        paddingRight: "2px",
                                        textAlign: "center",
                                        fontSize: "14px",
                                        margin: "2px",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                      }}
                                    >
                                      {j}
                                    </span>
                                  ))}
                                  <div>{i.inclusionThird}</div>
                                  <span className="mr-2">{i.year}</span>
                                  <span>{i.month}</span>
                                </div>
                              </div>
                              <div className="col-6">
                                <span>{i.paymentStatement}</span>
                                <h3>₹{i.price}</h3>
                                <p>{i.paymentArtciles}</p>
                                <button className="mb-3">{i.btnfirst}</button>
                                <button>{i.btnSec}</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : "loading..."}
              </div>
            ) : (
              <>
                <div>
                  {data.map((i, index) => (
                    <div
                      className="border mb-3"
                      style={{ borderRadius: "5px", overflow: "hidden" }}
                    >
                      <div className="row ">
                        <div className="col-6 ">
                          <img
                            src={i.img}
                            className=""
                            style={{ height: "auto", width: "100%" }}
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <h4>{i.title}</h4>
                          {Array(parseInt(Math.ceil(i.starRating)))
                            .fill()
                            .map((_, i) => (
                              <span>⭐</span>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;
