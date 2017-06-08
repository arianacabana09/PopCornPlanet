'use strict';

const Header = () => {
  const header = $('<header></header>');
  const h1 = $('<h1>Pop Corn Time</h1>');

  header.append(h1);

  return header;
};
