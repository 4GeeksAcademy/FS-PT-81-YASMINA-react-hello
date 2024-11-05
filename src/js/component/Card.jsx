import React from "react";

export const Card = () => {
    return (
        <div className="card mb-4 me-3 " style={{ width: '20rem', height: '35rem' }}>
            <img className="card-img-top" src="https://fastly.picsum.photos/id/377/500/325.jpg?hmac=MBPanSPxTdmIy1v0wZEpXcF1TYYx8PoZilmYtSnhA8g" alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem necessitatibus minus voluptatibus odio architecto quam, velit, magnam illo nobis hic veritatis incidunt ipsum dolores illum sequi placeat. Est, esse ab.</p>
                <hr />
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>

    )
}