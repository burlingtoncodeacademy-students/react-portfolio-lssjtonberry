import React from 'react'
import { Divider, Image } from 'semantic-ui-react'



const Interests = () => (
  <div id="hobbies">
    <Image src={"https://openclipart.org/image/2400px/svg_to_png/91963/tae-kwon-do.png"} size='medium' verticalAlign='top' /> <span>Tae Kwon Do</span>
    <Divider />
    <Image src={"https://clipartmag.com/images/hike-clipart-20.jpg"} size='medium' verticalAlign='middle' />{' '}
    <span>Hiking</span>
    <Divider />
    <Image src={"https://images.all-free-download.com/images/graphiclarge/hiker_hiking_clip_art_15667.jpg"} size='medium' verticalAlign='bottom' />{' '}
    <span>Drawing</span>
    <p id="hobbiescloser">And Many More!</p>
  </div>
)

export default Interests

