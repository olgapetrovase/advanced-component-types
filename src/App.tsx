import Input from "./components/Input";
import Button from "./components/Button";
import Form , {type FormHandle } from "./components/Form";
import { useRef } from "react";

// function HeartIcon() {
//   return <span>❤️</span>;
// }
function App() {
  // const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {name: string; age: string};
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>   
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name"/>
        <Input type="number" label="Age" id="age"/>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;

{/* <Input id="name" label="Your name" type="text"/>
      <Input id="age" label="Your age" type="number"/> */}
      {/* <p>
        <ButtonOld el="button" className="button">A Button</ButtonOld>
      </p>
      <p>
        <ButtonOld el="anchor" className="button" href='https://google.com'>A Link</ButtonOld>
      </p> */}

      {/* <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p> */}

      {/* <Container as={Button} onClick={() => {}} type="button">Click me</Container>
      <p>
        <IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
        Like
        </IconButton>
      </p> */}

      {/* <Input label="Test" id="test" ref={input} /> */}
