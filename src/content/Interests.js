import React from 'react'
import { Divider, Image } from 'semantic-ui-react'



const Interests = () => (
  <div id="hobbies">
    <Image src={"https://openclipart.org/image/2400px/svg_to_png/91963/tae-kwon-do.png"} size='medium' verticalAlign='top' /> <span>Tae Kwon Do</span>
    <Divider />
    <Image src={"https://clipartmag.com/images/hike-clipart-20.jpg"} size='medium' verticalAlign='middle' />{' '}
    <span>Hiking</span>
    <Divider />
    <Image src={"https://openclipart.org/image/800px/271689"} size='medium' verticalAlign='bottom' />{' '}
    <span>Drawing</span>
    <p id="hobbiescloser">And Many More!</p>
  </div>
)

export default Interests

