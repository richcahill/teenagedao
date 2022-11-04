export default function ShareToTwitterButton(props) {
  let tweet =
    "Let's build a beautiful hardware wallet with teenageDAO.xyz\n\n@teenageDAO @jugendingenieur";

  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweet
      )}`}
      data-size='large'
      target='_blank'
    >
      <div className='flex justify-between space-x-12 opacity-80  lowercase font-light rounded-sm cursor-pointer bg-te-blue px-6 py-4 text-white  hover:opacity-90 hover:shadow-lg transition duration-300'>
        <span>tweet support</span>
        <img
          src='/img/icons/twitter.svg'
          className='w-5 filter invert brightness-200'
        ></img>
      </div>
    </a>
  );
}
