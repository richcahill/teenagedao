let content = [
  { name: 'step 1', text: 'to be dreamed', shape: 'pentagon' },
  { name: 'step 2', text: "to be dao'd", shape: 'circle' },
  { name: 'step 3', text: 'to be designed', shape: 'rectangle' },
];

function HowCard(props) {
  return (
    <div className=' border-l border-te-black px-8'>
      <img src={`/img/shapes/${content[props.step - 1].shape}.svg`}></img>
      <h2 className='uppercase text-sm mt-8'>{content[props.step - 1].name}</h2>
      <p className='text-xl  uppercase mt-2'>{content[props.step - 1].text}</p>
    </div>
  );
}

export default function howSection(props) {
  return (
    <section>
      <div className='container mx-auto flex justify-center space-x-6 pt-16 pb-12'>
        <HowCard step={1} />
        <HowCard step={2} />
        <HowCard step={3} />
      </div>
    </section>
  );
}
