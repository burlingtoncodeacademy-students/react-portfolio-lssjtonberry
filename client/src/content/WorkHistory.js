import React from "react";
import { Button, Icon, Modal, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function WorkHistory() {
  {/*Setting useStates for both modal buttons.*/}
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  {/*An honest question here. Is it common to reuse div id names across multiple components if you want the styling to be exactly the same on each?*/}
  return (
    <div id="projects">
      {/*First Modal Button*/}
      <>
        <Button onClick={() => setFirstOpen(true)}>
          There's Gotta be More Than This...Right?
        </Button>

        <Modal
          onClose={() => setFirstOpen(false)}
          onOpen={() => setFirstOpen(true)}
          open={firstOpen}
        >
          <Modal.Header>So What's Your Story?</Modal.Header>
          <Modal.Content image>
            <div className="image">
              <Image
                size="medium"
                src="https://openclipart.org/image/2000px/155107"
                wrapped
              />
            </div>
            <Modal.Description>
              <header font-size="xx-large">I'll be HAPPY to Tell Ya</header>
              <li>
                I have a Masters Degree in Special Education with a focus in
                Applied Behavioral Analysis
              </li>
              <li>
                I've worked for various mental health organizations and school
                districts; serving those in need at home, school and the
                community!{" "}
              </li>
              <li>
                {" "}
                My expertise was(at first...) the analysis of human behavior. I
                worked with clients and used this data to help individuals work
                through their problems utilizing custom built solutions that
                work specifically FOR THEM! Along the way, it was always my hope that I 
                might also help teach people other things too! Personalization through the expansion of ones horizons beyond what we know 
                is something that I believe will never go out of style. {" "}
              </li>
            </Modal.Description>
          </Modal.Content>
          {/*Second Modal Button*/}
          <Modal.Actions>
            <Button onClick={() => setSecondOpen(true)} primary>
              So What in the world does that have to do with Web Development!?{" "}
              <Icon name="right chevron" />
            </Button>
          </Modal.Actions>

          <Modal
            onClose={() => setSecondOpen(false)}
            open={secondOpen}
            size="small"
          >
            <Modal.Header>I'm Glad You Asked</Modal.Header>
            <Modal.Content>
              <li>The tools are different but the ideology is the same.</li>
              <li>I want to use my knowledge of Software Development to help people.</li>
              <li>I use Javascript to help practitioners to construct digital solutions based off user given data that work just for YOU </li>
              <li>I use HTML and CSS to take my Javascript to the NEXT LEVEL! I build easily accessible and esthetically pleasing websites.</li>
              <li>Eventually...I'll also use React Native and Swift to accomodate those who prefer mobile applications from both the IOS App and Google Play Store<br /> </li>
              <a href='imgs/Resume.pdf' download>Check Out My Resume for Yourself!</a>
            </Modal.Content>
            <Modal.Actions>
              <Button
                icon="check"
                content="All Done"
                onClick={() => setSecondOpen(false)}
              />
            </Modal.Actions>
          </Modal>
        </Modal>
      </>
    </div>
  );
}

export default WorkHistory;
