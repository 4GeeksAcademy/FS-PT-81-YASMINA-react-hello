import React from "react";

export const Jumbotron = () => {
    return (
        <div className="container my-5">
            <div className="p-5 mb-5 bg-light rounded-1 pt-3">
                <div className="container-fluid ">
                    <h1 className=" fw-semibold">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deleniti porro neque, molestias et quaerat tenetur necessitatibus vitae illo vero in explicabo tempora itaque praesentium facere cumque accusantium atque dolores?</p>
                    <button className="btn btn-primary btn-lg"type="button">Call to action!</button>
                </div>
            </div>
        </div>
    )
}