let content = [
  { name: 'step 1', text: 'to be dreamed', shape: 'pentagon' },
  { name: 'step 2', text: "to be dao'd", shape: 'circle' },
  { name: 'step 3', text: 'to be designed', shape: 'rectangle' },
];

export default function howCard(props) {
  return (
    <div className=' border-l border-te-black px-8'>
      <img src={`/img/shapes/${content[props.step - 1].shape}.svg`}></img>
      <h2 className='uppercase text-sm mt-8'>{content[props.step - 1].name}</h2>
      <p className='text-xl  uppercase mt-2'>{content[props.step - 1].text}</p>
    </div>
  );
}
