function BrandBar() {
  return (
    <>
      <nav>
        <div className='nav--social--wrapper'>
          {/* eslint-disable-next-line */}
          <a className='fa-brands fa-github fa-2x' href="https://github.com/qaztiel/tibiaguessr"></a>
          {/* eslint-disable-next-line */}
          <a className='fa-brands fa-tiktok fa-2x' href="https://www.tiktok.com/@tibiaguessr"></a>
          {/* eslint-disable-next-line */}
          <a className='fa-brands fa-instagram fa-2x' href="https://www.instagram.com/tibiaguessr/"></a>
          {/* eslint-disable-next-line */}
          <a className='fa-brands fa-twitter fa-2x' href="https://twitter.com/tibiaguessr"></a>
        </div>
        <div className='nav--items'>
          <div className='logo'></div>
          <h1 className='nav--title'>Tibiaguessr</h1>
        </div>
        <div></div>
      </nav>
    </>
  );
}

export default BrandBar;
