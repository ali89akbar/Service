import React from 'react'
import picAli from '../Images/picali.jpg'
import picZayan from '../Images/piczayan.jpg'
import '../style.scss'


const AboutUs = () => {
  return (
    <div>
      <div className="WrapAbout">
        <div className="TextContainer">
            <div className="AboutText">
                <h1 id='About-heading'>About</h1>
                <h3 className='AboutTextSection'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed atque nesciunt eveniet, aut rerum. Dolorum totam architecto ut repellendus libero cumque veniam fugiat facilis minus sunt doloribus, inventore quod ipsa soluta? A, alias. Debitis temporibus tenetur voluptate beatae mollitia voluptatem facilis accusantium. Impedit adipisci aperiam excepturi deserunt eius quibusdam ipsa architecto saepe quasi! Corrupti culpa, nostrum quam nobis ad dignissimos sint sapiente tempora pariatur voluptatibus provident distinctio! Sequi possimus quae totam dolore vitae accusantium vero aspernatur harum, repudiandae tempore necessitatibus non molestiae tempora laboriosam, quisquam voluptas sint! Hic, laudantium ea odit officiis iusto sunt quo eos architecto. Quisquam, nobis?
                </h3>
            </div>
            <div className="Authors">
                <div className="picZayan">
                    <img src={picZayan} alt="" />
                </div>
                <div className="picAli">
                    <img src={picAli} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
