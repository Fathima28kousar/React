import React from "react";
const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "1rem 0 0 5rem",
    width: "60rem",
};

const div1Styles = {
    backgroundColor: "pink",
    height: "30px",
    width: "50%",
    textAlign: 'center'
};

function ScoreBar({ country, population }) {
    const barWidth = `${(population / 7693165599) * 100}%`;
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div style={containerStyle}>
                    <h2 style={{marginRight:'150px',backgroundColor:'blue'}}>{country}</h2>
                <div style={div1Styles}>
                    <div style={{
                        backgroundColor: "orange",
                        height: "100%",
                        width: barWidth,
                        textAlign: 'center'
                    }}></div>
                </div>
                <div>
                    <h2 style={{marginLeft:'100px',textAlign: 'center'}}>{population}</h2>
                </div>
            </div>
            </div>  
            </div>
            
            
        </div>
    );
}
export default ScoreBar;
