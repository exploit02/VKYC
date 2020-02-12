import React from 'react'
import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'
import Upload from '../assets/upload.svg'

function resultScreen() {
    return (
        <div>
           <section class="result_screen_background_color">
            <div class="row">
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
            </div>
            <div class="col-12" style={{height: '200px'}}>
                <div class="result_screen_background_img">
                    <img src={AccountImg} class="w-100"/>
                </div>
                <div>
                  <img src={UserImg}class="result_screen_img"/>
                </div>
            </div>
            <div class="col-12">
                <h2 class="text-center result_screen mb-3">Result Screen</h2>
                <div class="col-12 d-flex justify-content-center">
                    <div >
                        <img src={UserImg} class="user_profile_img"/>
                    </div>
                </div>
                <div class="col-12">
                    <ul class="pl-0 list-unstyled list_of_proved">
                        <li>
                            <div class="d-flex align-items-center justify-content-between div_bottom_boder">
                               <p class="mt-3">Liveliness test result</p>
                               <i class="fa fa-check-circle" aria-hidden="true"></i>
                          </div>
                        </li>
                         <li>
                            <div class="d-flex align-items-center justify-content-between div_bottom_boder">
                               <p class="mt-3">Face match result</p>
                               <i class="fa fa-check-circle" aria-hidden="true"></i>
                          </div>
                        </li>
                         <li>
                            <div class="d-flex align-items-center justify-content-between div_bottom_boder">
                               <p class="mt-3">Cross check result</p>
                               <i class="fa fa-check-circle" aria-hidden="true"></i>
                          </div>
                        </li>
                         <li>
                            <div class="d-flex align-items-center justify-content-between div_bottom_boder">
                               <p class="mt-3">Goverment DB validation result</p>
                               <i class="fa fa-check-circle" aria-hidden="true"></i>
                          </div>
                        </li>
                         <li>
                            <div class="d-flex align-items-center justify-content-between div_bottom_boder">
                               <p class="mt-3">Geo tagging</p>
                               <i class="fa fa-check-circle" aria-hidden="true"></i>
                          </div>
                        </li>
                    </ul>
                </div>
                <div class="col-12">
                    <div class="profile_details mb-4">
                          {/* <!-- Card --> */}
                            <div class="card ">
                                 <div class="card_header">
                                     <h3 class="mb-0">Profile details</h3>
                                 </div>
                                {/* <!-- Card content --> */}
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between profile_details_boder">
                                       <p class="mt-3">Name</p>
                                       <h4 class="mt-3 mb-3">Anjali Santosh</h4>
                                    </div>
                                      <div class="d-flex align-items-center justify-content-between profile_details_boder">
                                       <p class="mt-3">DOB</p>
                                       <h4 class="mt-3 mb-3">13/06/1997</h4>
                                    </div>
                                      <div class="d-flex align-items-center justify-content-between profile_details_boder">
                                       <p class="mt-3">Father Name</p>
                                       <h4 class="mt-3 mb-3">Santosh Kumar</h4>
                                    </div>
                                      <div class="d-flex align-items-center justify-content-between profile_details_boder">
                                       <p class="mt-3">GPS</p>
                                       <h4 class="mt-3 mb-3"><span>48.3191</span><span>5.5778</span></h4>
                                    </div>
                                      <div class="d-flex align-items-center justify-content-between profile_details_boder">
                                       <p class="mt-3">Timestamp</p>
                                       <h4 class="mt-3 mb-3"><span>2020-02-03</span><span>10:02:21</span>IST</h4>
                                    </div>
                                      <div class="d-flex align-items-center justify-content-between profile_details_boder">
                                       <p class="mt-3">Gender</p>
                                       <h4 class="mt-3 mb-3">Female</h4>
                                    </div>
                                      <div class="d-flex align-items-center justify-content-between ">
                                       <p class="mt-3">PAN</p>
                                       <h4 class="mt-3 mb-3">AAAAA1234Z</h4>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Card --> */}
                    </div>
                </div>
                
            </div>
            <div class="col-12 p-0">
                    <button type="button" class="btn btn-block submit_btn">Submit</button>
                </div>
        </section> 
        </div>
    )
}

export default resultScreen
