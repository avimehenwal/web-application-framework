/*
*  zeplin design url
*/
import * as React from "react";

type Props = {
  text: string,
  isEnabled?: boolean,
}

const object = {
  hello: "🌎",
  goodbye: "🌙",
  nested: {
    innerkey: "🐦",
    someOther: "name",
    orValue: 23
  },
  array: [37]
}

const ConsoleLog: React.FC<Props> = (props) => {
  console.count('--> ConsoleLog component');

  console.log('>');
  console.log({ object });

  console.log('>');
  console.log(object);

  console.log('>');
  console.dir(object);

  console.log('>');
  console.table(object);


  return (<h1> How to console log</h1>)
}

export default ConsoleLog