import styled from "styled-components";
import { Container } from "./styles/Container.style";
import LightsPage from "./LightsPage";
import waterImg from "./assets/water.png"
import lightsImg from "./assets/lights.png"
import musicImg from "./assets/music.png"
import securityImg from "./assets/security.png"
import settingsImg from "./assets/settings.png"

const MainPageSection = styled(Container)`
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    height: 100vh;
`
const InfoTab = styled.div`
    displau: flex;
    border: 2px solid white;
`

const MenuPanel = styled.footer`
    display: flex;
    width: 100%;
    height: fit-content;    
    justify-content: space-around;
    margin-bottom: 1rem;

    img{
        width: 2.5rem;
        align-self: center;
        cursor: pointer;
    }

    img.lightsIcon{
        width: 3rem;
    }
`



function MainPage(){
    return(
        <MainPageSection>
            <LightsPage/>
            <MenuPanel>
                <img className="lightsIcon" src={lightsImg} alt="lights.png" />
                <img src={waterImg} alt="water.png" />
                <img src={musicImg} alt="music.png" />
                <img src={securityImg} alt="security.png" />
                <img src={settingsImg} alt="settings.png" />
            </MenuPanel>
        </MainPageSection>
    )
}

export default MainPage