import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Projects() {
  {/*Setting useStates for both modal buttons.*/}
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)

  return (
    <div id="projects">
      {/*First Modal Button. Opens first modal when clicked*/}
    <>
      <Button onClick={() => setFirstOpen(true)}>Check Out Some of My Projects!</Button>

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>The Road So Far...</Modal.Header>
        <Modal.Content image>
          <div className='image'>
            <Icon name='right arrow' />
          </div>
          <Modal.Description>
            <header font-size="xx-large">Here You'll Find A List of All My Current Projects.</header>
            <h2>As of 9/3/2021 all projects are works in progress</h2>
            <li>Guess the Number</li>
            <li>Yelpington</li>
            <li>Tic Tac Toe</li>
            <li>And Even this Portfolio</li>
            
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {/*opens second modal*/}
          <Button onClick={() => setSecondOpen(true)} primary>
            Click Here to Check Out Their Github Links <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
        {/*Second Modal Button*/}
        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='small'
        >
          <Modal.Header>Project Links</Modal.Header>
          <Modal.Content>
            {/*lists anchor tags of each project listed*/}
            <div>
          <li><a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-lssjtonberry">Guess The Number</a>
          </li>
            <li><a href="https://github.com/burlingtoncodeacademy-students/yelpington-lssjtonberry">Yelpington</a></li>
            <li><a href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-lssjtonberry">Tic Tac Toe</a></li>
            <li><a href="https://github.com/burlingtoncodeacademy-students/react-portfolio-lssjtonberry.git">And this Portfolio too!</a></li>
              </div>
          </Modal.Content>
          <Modal.Actions>
            {/*closes both modals*/}
            <Button
              icon='check'
              content='All Done'
              onClick={() => setSecondOpen(false)}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
    </div>
  )
}


export default Projects
