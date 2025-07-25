import React from 'react'

const SecondsCounter = (props) => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex align-items-center counter">
                    <div className="digit">
                        <div className="row">
                            <div className="col">
                                <i class="fa-solid fa-clock"></i>
                            </div>


                            <div className="col">
                                {props.digitSix}
                            </div>

                             <div className="col">
                                {props.digitFive}
                            </div>

                            <div className='col'>
                                {props.digitFour}
                            </div>

                            <div className='col'>
                                {props.digitThree}
                            </div>

                            <div className='col'>
                                {props.digitTwo}
                            </div>

                            <div className='col'>
                                {props.digitOne}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondsCounter
