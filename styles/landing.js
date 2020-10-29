import css from "styled-jsx/css";

export default css`
.landingHeader{
    position: relative;
    color: white;
}

.header {
    position: relative;
    width: 100%;
    height: 100vh;
    background: black;
    background-size: cover;
}

.navbar {
    background-color: forestgreen;
    color: white;
    font-size: 2rem;

    z-index: 1;
    width: 100%;
    height: 5rem;

    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    animation-name: mount;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    animation-timing-function: ease-out;
}
@keyframes mount{
    0%{
        top: 110vh;
    }
    100%{
        top: 88vh;
    }
}

.fixNavbar{
    margin-top: 0;
    position: fixed;
}
`;