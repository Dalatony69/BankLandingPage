import React from "react";
import RequestButton from "./RequestButton";

function Section1(){
    return(
        <div className="Section1">
            
            <main className="upr">
                <div className="holder">
                    <span className="title">
                        Next Generation <br/>digital banking
                    </span>
                    <span className="sub-title">
                        Take your financial life online.Your EasyBank account will be a one-stop-shop for spending, saving,budgeting,investing,and much.
                    </span>
                    <div className="button-holder">
                        <RequestButton/>
                    </div>
                </div>
                <div className="bckg"></div>
            </main>
            <div className="photo">img</div>
            <main className="lwr">
                <div className="holder">
                    <div className="hook">
                        <span className="title">Why choose Easybank</span>
                        <span className="sub-title">We leverage Open Banking to turn your bank account into financial hub.<br/>Control your finances like you never before.</span>
                    </div>
                    <div className="card-holder">
                        <div className="card">
                            <div className="logo-holder">
                                <div className="logo OnlineBanking"></div>
                            </div>
                            <span className="tite">Online Banking</span>
                            <span className="subtitle">
                                Our modern web and mobile
                                applications allow you to keep
                                track of your finances wherever you
                                are in the world.
                            </span>
                        </div>
                        <div className="card">
                            <div className="logo-holder">
                                <div className="logo SimpleBudgetting"></div>
                                </div>
                                <span className="tite">SimpleBudgetting</span>
                                <span className="subtitle">
                                    Our modern web and mobile
                                    applications allow you to keep
                                    track of your finances wherever you
                                    are in the world.
                                </span>
                        </div>
                        <div className="card">
                            <div className="logo-holder">
                                <div className="logo FastOnBoarding"></div>
                                </div>
                                <span className="tite">FastOnBoarding</span>
                                <span className="subtitle">
                                    Our modern web and mobile
                                    applications allow you to keep
                                    track of your finances wherever you
                                    are in the world.
                                </span>
                            </div>
                        <div className="card">
                            <div className="logo-holder">
                                <div className="logo OpenApi"></div>
                                </div>
                                <span className="tite">OpenApi</span>
                                <span className="subtitle">
                                    Our modern web and mobile
                                    applications allow you to keep
                                    track of your finances wherever you
                                    are in the world.
                                </span>
                            </div>
                    </div>
                </div>
                
            </main>
        </div>
    );
}
export default Section1;