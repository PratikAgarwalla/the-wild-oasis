import styled from "styled-components";

const TopBarMain = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 2rem;
`;

function TopBar(){
    return(
    <TopBarMain>
        <p>Email : demouser@app.com | Password : demouser123 😊</p>
    </TopBarMain>);
}

export default TopBar;