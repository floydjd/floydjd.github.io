import React from "react";
import { Box } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";

const errorText = `
  xúÌôgPTYÄÔ{ù
  ›Mì°…I¢Ñ$Á$A≤®@wìi°…AQdpFIä ¢ÄéAFQ≈Ä((†¢N#ÉÄ2é"**K„èŸ≠˘±µU[˚g˚¸xÔ´sOΩsÓ´[ıæ™Ä1ûïêÎê¿M·˘:€1ÇÇCò HÄ( ŒJN¥ıˆˆ ´!®ã˜c ‹ÔÎ÷sœë¢ã
    >Ëõqy¸v¢yÀﬂÎˇ%àÏ. à∂ ±lN2kïw≠r4;Å-»œ
`;

const typings = [
  "Hello",
  "My name is Jordan Floyd.",
  "Welcome to my site.",
  "Stay a while.",
  "Please don't leave just because there is nothing here.",
  ...new Array(5).fill(""),
  "Are you still there?",
  ...new Array(5).fill(""),
  "This is nice.",
  "See, we could be happy like this.",
  "",
  "(◕‿◕)",
  ...new Array(7).fill(""),
  "I hope you aren't expecting something exciting to happen.",
  "This really is all there is.",
  ...new Array(2).fill(""),
  `Wait... I think thëre§ sõmsœëng wr ng wi¢N ã>Ëõqy¸${errorText}`,
  ...new Array(5).fill(""),
];

export const Intro: React.FC = () => (
  <Box>
    <ReactTypingEffect
      text={typings}
      speed={75}
      eraseSpeed={75}
      eraseDelay={1000}
      typingDelay={500}
    />
  </Box>
)

Intro.displayName = "Intro";

export default Intro;
