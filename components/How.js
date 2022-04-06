let content = [
  { name: 'step 1', text: 'to be dreamed', shape: 'pentagon' },
  { name: 'step 2', text: "to be dao'd", shape: 'circle' },
  { name: 'step 3', text: 'to be designed', shape: 'rectangle' },
];

function HowCard(props) {
  let step = props.step - 1;
  return (
    <div className='border-t first:border-none md:border-t-0 md:border-l md:flex-1 border-te-black py-6 px-4 md:m-0 md:text-center'>
      <img
        src={`/img/shapes/${content[step].shape}.svg`}
        className='w-full max-w-[240px] mx-auto'
      />
      <h2 className='uppercase text-sm mt-2'>{content[step].name}</h2>
      <p className='text-xl  uppercase mt-2'>{content[step].text}</p>
    </div>
  );
}

export default function howSection(props) {
  return (
    <section>
      <div className='container mx-auto flex flex-col md:flex-row md:justify-between py-12 px-4 space-y-6 md:space-y-0'>
        <HowCard step={1} />
        <HowCard step={2} />
        <HowCard step={3} />
      </div>
    </section>
  );
}
