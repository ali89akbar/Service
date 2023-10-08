import React from 'react'
import '../style.scss'
const ContactUs = () => {
    return (
        <div className='body'>
            <div className="HeaderContact">
                <h1 className='contactHeader'>Contact...</h1>

                <div className="HeaderContent">
                    <h2 className="startContact">We'd love to hear from you.</h2>

                    <p className="startText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel sunt eos eum nesciunt perferendis animi neque sit id temporibus, sapiente perspiciatis labore placeat veniam totam officiis, maiores odit ab.</p>
                </div>

                <div className='ContactForm'>
                    <form>
                        <label htmlFor="">NAME*</label>
                        <input type="text" required />
                        <div className="line"></div>

                        <label htmlFor="">COMPANY</label>
                        <input type="text" required />
                        <div className="line"></div>

                        <label htmlFor="">EMAIL*</label>
                        <input type="text"  />
                        <div className="line"></div>

                        <label htmlFor="">PHONE NUMBER*</label>
                        <input type="number" required />
                        <div className="line"></div>

                        <label htmlFor="">MESSAGE</label>
                        <input type="text"  />
                        <div className="line"></div>
                    </form>
                </div>


                <div className="detailPart">
                    <h3 className='mailContact'>mzayankhan27@gmail.com</h3>
                    <p id='zayanContactNo'> +92 348 3039196 </p>
                    <h3 className='mailContact'>aliakbar@gmail.com</h3>
                    <p id='zayanContactNo'> +92 331 2035946 </p>
                </div>
                
            </div>
            

        </div>
    )
}

export default ContactUs
