import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    text-align: center;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--orange);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      padding: 10px;  /* Adjust padding for desired border width */
      // box-shadow: inset 0 0 0 10px #ccc;  /* Set border color */
      max-width: 500px;
    }
  }

  // .Typerwriter{
  // overflow: hidden; /* Ensures text doesn't overflow the container */
  // // border-right: .10em solid white; /* Optional blinking cursor effect */
  // white-space: nowrap; /* Keeps text on a single line */
  // margin: 0 auto; /* Centers the text */
  // letter-spacing: .1em; /* Adjust letter spacing for better aesthetics */
  // animation: typing 3.5s steps(40, end) infinite alternate;
  // }

  // @keyframes typing {
  //   from { width: 0 }
  //   to { width: 100% }
  // }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{
      text-align:center;

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`