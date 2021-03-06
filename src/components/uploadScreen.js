import React from 'react'
import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'
import UserImg2 from '../assets/user_img_2.png'
import camera from '../assets/camera.svg'

function uploadScreen() {
    return (
        <div>
            <section class="">

<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 d-flex pl-0 pr-0">
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 upload_tab_bg">
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#home">Status</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#menu1">Validation</a>
                </li>

            </ul>
        </div>

        {/* <!-- Tab panes --> */}
        <div class="tab-content">
            <div id="home" class="container tab-pane active">
                <div class="step">
                    <div>
                        <div class="circle">1</div>
                    </div>
                    <div>
                        <div class="title">First Step</div>
                       
                    </div>
                </div>
                <div class="step ">
                    <div>
                        <div class="circle">2</div>
                    </div>
                    <div>
                        <div class="title">Second Step</div>
                    </div>
                </div>
                <div class="step">
                    <div>
                        <div class="circle">3</div>
                    </div>
                    <div>
                        <div class="title">Third Step</div>
                    </div>
                </div>
                  <div class="step">
                    <div>
                        <div class="circle">4</div>
                    </div>
                    <div>
                        <div class="title">Third Step</div>
                    </div>
                </div>
                  <div class="step">
                    <div>
                        <div class="circle">5</div>
                    </div>
                    <div>
                        <div class="title">Third Step</div>
                    </div>
                </div>
            </div>
            <div id="menu1" class="container tab-pane fade">
                <br/>
                <h3>Menu 1</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        </div>

    </div>
    <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-7 vedio_cal_bg ">
      <div class="text-center">
        <img src={UserImg2}/>

          <img src={UserImg}class="vedio_screen_img"/>
        
           <div class="d-flex vedio_icons">
       <div class="micro_phone mr-3"></div>
       <div class="call"></div>
      </div>
      </div>

    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 pl-0 pr-0">
        <section class="result_screen_background_color">
    
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
               <p class="pl-2">9.41</p>
                <div>
                    <ul class="list-unstyled d-flex">
                        <li class="pl-2"><i class="fa fa-wifi" aria-hidden="true"></i></li>
                        <li class="pl-2"><i class="fa fa-wifi" aria-hidden="true"></i></li>
                        <li class="pl-2"><i class="fa fa-battery-full" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    
    <div class="col-12 pl-0 pr-0 mb-5" >
        <div class="result_screen_background_img">
            <img src={AccountImg} class="w-100"/>
        </div>
        <div>
          <img src={UserImg} class="result_screen_img"/>
        </div>
    </div>
    <div class="col-12 adhaar_upload_steps mb-5">
      <p class="text-center">Screen capture streaming</p>
      <ul class="pl-0 list-unstyled d-flex justify-content-center align-items-center">
        <li class="d-flex justify-content-center align-items-center mr-4">1</li>
        <li class="d-flex justify-content-center align-items-center mr-4">2</li>
        <li class="d-flex justify-content-center align-items-center">3</li>
      </ul>
    </div>
    <div class="col-12 aadhaar_content text-center">
      <h3 class="mb-5">Capture document</h3>
      <p class="mb-5">Please click the camera icon and capture the below mentioned document</p>
      <button type="button" class="btn btn-block aadhaar_btn mb-5">Pan Card <img src={camera} class="upload_icon"/></button>
     
    </div>
    
</section>
    </div>
</div>
</section>
        </div>
    )
}

export default uploadScreen
